import React, { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "./hooks/useTodos.ts";
import axios from "axios";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const addTodo = useMutation({
    mutationFn: (todo: Todo) => {
      return axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data);
    },
    onSuccess: (savedTodo, newTodo) => {
      console.log(savedTodo);
      console.log(newTodo);

      // Approach A: Invalidating the cache
      // queryClient.invalidateQueries({ queryKey: ["todos"] });

      // Approach B: Updating the data in the cache directly
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        ...(todos || []),
        savedTodo,
      ]);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current && ref.current.value) {
          addTodo.mutate({
            userId: 999,
            id: 0,
            title: ref.current?.value,
            completed: false,
          });
        }
      }}
    >
      <input className="input mr-5" type="text" ref={ref} />
      <button className="btn btn-primary">Add</button>
    </form>
  );
};
export default TodoForm;
