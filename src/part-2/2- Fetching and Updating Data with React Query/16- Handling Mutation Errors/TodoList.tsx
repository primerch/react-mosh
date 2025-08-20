import useTodos from "./hooks/useTodos.ts";

const TodoList = () => {
  const { data: posts, error, isLoading } = useTodos();

  return (
    <table className="table">
      <thead>
        <tr>
          <td>UserId</td>
          <td>ID</td>
          <td>Title</td>
          <td>Body</td>
        </tr>
      </thead>
      <tbody>
        {posts?.map((post) => (
          <tr>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TodoList;
