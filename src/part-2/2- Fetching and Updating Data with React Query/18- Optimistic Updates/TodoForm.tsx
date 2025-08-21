import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Todo } from './hooks/useTodos.tsx';
import axios from 'axios';
import { useRef } from 'react';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);

  const addMutation = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    onSuccess: (serverTodo, userTodo) => {
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.setQueryData(['todos'], (todos: Todo[]) => [
        ...todos,
        serverTodo,
      ]);
      if (ref.current) ref.current.value = '';
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
