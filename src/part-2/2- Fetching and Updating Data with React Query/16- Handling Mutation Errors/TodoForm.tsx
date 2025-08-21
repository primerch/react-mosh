import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Todo } from "./hooks/useTodos.ts";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (serverTodo, userTodo) => {
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        ...(todos || []),
        serverTodo,
      ]);
    },
  });

  

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {addTodo.error?.message}
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              userId: 999,
              id: 999,
              title: ref.current.value,
              body: "NOTHING",
            });
          }
        }}
      >
        <input type="text" className="input mr-5" ref={ref} />
        <button className="btn btn-primary">Add</button>
      </form>
    </>
  );
};
export default TodoForm;
