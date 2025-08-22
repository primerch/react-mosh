import APIClient from './apiClient';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default new APIClient<Todo>('/todos');
