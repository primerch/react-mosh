import React from "react";
import usePosts from "./hooks/usePosts.ts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

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
    </>
  );
};
export default PostList;
