import React from "react";
import usePosts from "./hook/usePosts.ts";

const query = {
  pageSize: 10,
};

const PostList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = usePosts(query);

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
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((post) => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary mr-5"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};
export default PostList;
