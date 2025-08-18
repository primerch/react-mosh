import useTodos from "./hooks/useTodos.ts";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

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
