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
    setTasks(state, action: PayloadAction<Task>) {
      const task = action.payload;
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
} = tasksSlice.actions;

export default tasksSlice.reducer;
