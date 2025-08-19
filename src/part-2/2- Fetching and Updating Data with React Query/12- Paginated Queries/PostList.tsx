import React, { useState } from "react";
import usePosts, { type PostQuery } from "./hooks/usePosts.ts";

const PostList = () => {
  const [page, setPage] = useState(1);

  const queryObject: PostQuery = {
    page: page,
    pageSize: 10,
  };

  const { data: posts, error, isLoading } = usePosts(queryObject);

  const users = [
    { userId: 1, userText: "User 1" },
    { userId: 2, userText: "User 2" },
    { userId: 3, userText: "User 3" },
  ];

  if (isLoading)
    return <span className="loading loading-ball loading-xl">Loading...</span>;

  if (error) return <span className="text-error">{error.message}</span>;

  return (
    <>
      <ul className="list">
        {posts?.map((post) => (
          <li className="list-row" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary mr-3"
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </>
  );
};
export default PostList;
