import useTodos from "../7- Creating a Custom Query Hook/hooks/useTodos.ts";

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodos();
  if (isLoading) return <span className="loading loading-xl loading-ball" />;
  if (error) return <span className="text-error">{error.message}</span>;

  return (
    <ul className="list">
      {todos?.map((todo) => (
        <li className="list-row">{todo.title}</li>
      ))}
    </ul>
  );
};
export default TodoList;
