import { useQuery } from '@tanstack/react-query';
import type { Todo } from '../todo.tsx';
import { CACHE_KEY_TODOS } from '../constants.ts';
import APIClient from '../services/apiClient.ts';

const useTodos = () => {
  const apiclient = new APIClient<Todo>('/todos');

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiclient.getAll,
  });
};

export default useTodos;
