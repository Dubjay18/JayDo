import {
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState: TasksState = {
  categories: [],
  tasks: [],
  selectedCategory: null,
  selectedTask: null,
  done: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category>) {
      state.categories = [
        ...state.categories,
        action.payload,
      ];
    },
    setTasks(state, action: PayloadAction<Task>) :void {
      const task :Task = action.payload;
      const category = state.categories.find(
        (c) => c.id === task.categoryId
      );
      console.log(category, state.categories);

      if (category) {
        console.log("success");

        category.tasks.push(task);
        state.tasks.push(task);
      }

      // state.tasks = [...state.tasks, action.payload];
    },
    toggleDone(state, action: PayloadAction<{id: string, done: boolean}>): void{
      const task:any = state.tasks.find(
          (t) => t.id === action.payload.id
      );
      console.log(task,"task")
      if(task){
        task.done = action.payload.done
      }

    },
    setSelectedCategory(
      state,
      action: PayloadAction<Category | null>
    ) {
      state.selectedCategory = action.payload;
    },
    setSelectedTask(
      state,
      action: PayloadAction<Task | null>
    ) {
      state.selectedTask = action.payload;
    },
  },
});

export const {
  setCategories,
  setTasks,
  setSelectedCategory,
  setSelectedTask,
    toggleDone
} = tasksSlice.actions;

export default tasksSlice.reducer;
