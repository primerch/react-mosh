import usePosts from "./hook/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <div>isLoading...</div>;

  if (error) return <div className="text-error">{error.message}</div>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>UserId</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts?.map((post) => (
          <tr key={post.id}>
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
export default PostList;
