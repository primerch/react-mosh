import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Todo } from "./hooks/useTodos.ts";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current && ref.current.value) {
          mutation.mutate({
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
  );
};
export default TodoForm;
