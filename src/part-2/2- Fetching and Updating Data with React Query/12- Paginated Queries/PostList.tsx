import usePosts from "./hooks/usePosts.ts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading)
    return <span className="loading loading-ball loading-xl">Loading...</span>;
  if (error) return <span className="text-error">{error.message}</span>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Post ID</th>
          <th>Title</th>
          <th>Body</th>
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
export default PostList;
