import React, { useState } from "react";
import usePosts from "./hooks/usePosts.ts";

const PostList = () => {
  const [userId, setUserId] = useState<number | undefined>();
  const { data: posts, error, isLoading } = usePosts(userId);

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
      <select
        className="select"
        onChange={(e) => {
          const value = e.target.value;
          setUserId(value ? parseInt(value) : undefined);
        }}
        value={userId || ""}
      >
        <option value=""></option>
        {users.map((user) => (
          <option key={user.userId} value={user.userId}>
            {user.userText}
          </option>
        ))}
      </select>
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
