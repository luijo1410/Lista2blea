export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}