import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/tosdos")
      .then((res) => res.data);

  const { data: todos, error } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    retry: false,
  });

  if (error) return <span className="text-error">{error.message}</span>;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "✅" : "🔴"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TodoList;
