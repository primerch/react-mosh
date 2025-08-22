import { useRef } from 'react';
import useAddTodo from './hooks/useAddTodo.ts';
import type { Todo } from './hooks/todo.tsx';

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodoMutation = useAddTodo(() => {
    if (ref.current) ref.current.value = '';
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current && ref.current.value) {
          addTodoMutation.mutate({
            userId: 999,
            id: 999,
            title: ref.current.value,
            body: 'BODY',
          });
        }
      }}
    >
      <input type="text" className="mr-5" ref={ref} />
      <button disabled={addTodoMutation.isPending} className="btn btn-primary">
        {addTodoMutation.isPending ? 'Loading...' : 'Add'}
      </button>
    </form>
  );
};
export default TodoForm;
