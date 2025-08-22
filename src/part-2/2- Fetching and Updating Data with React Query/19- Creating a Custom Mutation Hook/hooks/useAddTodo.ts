import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { Todo } from './todo.tsx';
import { CACHE_KEY_TODOS } from '../constants.ts';

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(['todos'], (todos = []) => {
        return [newTodo, ...todos];
      });

      onAdd();

      return { previousTodos };
    },

    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todossss', todo)
        .then((res) => res.data),

    onSuccess: (savedTodo, newTodo) => {
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => {
        return todos?.map((todo) =>
          todo.id === newTodo.id ? savedTodo : todo,
        );
      });
    },

    onError: (e, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
    },
  });
};

export default useAddTodo;
