import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Todo } from '../todo.tsx';
import { CACHE_KEY_TODOS } from '../constants.ts';

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () =>
      axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.data),
  });
};

export default useTodos;
