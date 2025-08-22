import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../constants.ts';
import type { Todo } from '../services/todoService.ts';
import todoService from '../services/todoService.ts';

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
  });
};

export default useTodos;
