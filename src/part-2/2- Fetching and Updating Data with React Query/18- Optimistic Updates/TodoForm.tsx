import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Todo } from './hooks/useTodos.tsx';
import axios from 'axios';
import { useRef } from 'react';

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);

  const addMutation = useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todossss', todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || [];

      queryClient.setQueryData<Todo[]>(['todos'], (todos) => {
        return [newTodo, ...(todos ?? [])];
      });

      if (ref.current) ref.current.value = '';

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => {
        return todos?.map((todo) => (todo === newTodo ? savedTodo : todo));
      });
    },

    onError: (e, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current && ref.current.value) {
          addMutation.mutate({
            userId: 999,
            id: 999,
            title: ref.current.value,
            body: 'BODY',
          });
        }
      }}
    >
      <input type="text" className="mr-5" ref={ref} />
      <button disabled={addMutation.isPending} className="btn btn-primary">
        {addMutation.isPending ? 'Loading...' : 'Add'}
      </button>
    </form>
  );
};
export default TodoForm;
