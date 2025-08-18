import usePosts from "./hook/usePosts";
import { useState } from "react";

const PostList = () => {
  const [userId, setUserId] = useState<number>();

  const users = [
    {
      userId: 1,
      userText: "User 1",
    },
    {
      userId: 2,
      userText: "User 2",
    },
    {
      userId: 3,
      userText: "User 3",
    },
  ];

  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) return <div>isLoading...</div>;

  if (error) return <div className="text-error">{error.message}</div>;

  return (
    <>
      <select
        className="select w-full"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
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
