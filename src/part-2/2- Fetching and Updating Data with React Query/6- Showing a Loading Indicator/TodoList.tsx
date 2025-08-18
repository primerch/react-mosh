import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = async () =>
    (await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos"))
      .data;

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <span className="text-error">{error.message}</span>;

  return (
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
  );
};
export default TodoList;
