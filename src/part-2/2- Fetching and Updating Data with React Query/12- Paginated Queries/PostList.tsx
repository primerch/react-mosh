import { useState } from "react";
import usePosts from "./hooks/usePosts.ts";

const PostList = () => {
  const [page, setPage] = useState<number>(1);

  const query = {
    page: page,
    pageSize: 10,
  };

  const { data: posts, error, isLoading } = usePosts(query);

  if (isLoading)
    return <span className="loading loading-ball loading-xl">Loading...</span>;
  if (error) return <span className="text-error">{error.message}</span>;

  return (
    <>
      <table className="table-zebra table">
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
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        disabled={page === 1}
        className="btn btn-primary mr-5"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};
export default PostList;
