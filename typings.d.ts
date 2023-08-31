interface Category {
  id: string;
  name: string;
  tasks: Task[];
}

interface Task {
  id: string;
  name: string;
  categoryId: string;
  priority: "low" | "medium" | "high";
  alert?: boolean;
  description?: string;
  done: boolean

}

interface TasksState {
  categories: Category[];
  tasks: Task[];
  selectedCategory: Category | null;
  selectedTask: Task | null;
  done: boolean;
}

interface UserState {
  name?: string;
  email?: string;
  photoUrl?: string;
}
