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
}

interface TasksState {
  categories: Category[];
  tasks: Task[];
  selectedCategory: Category | null;
  selectedTask: Task | null;
}
