import useTodos from './hooks/useTodos.tsx';

export const TodoList = () => {
  const { data: todos } = useTodos();

  return (
    <table className="table">
      <thead>
        <tr>
          <td>UserID</td>
          <td>ID</td>
          <td>Title</td>
          <td>Body</td>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <tr>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
