import axios from "axios";

import { useQuery } from "@tanstack/react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = (userId: number | undefined) => {
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: { userId: userId },
        })
        .then((res) => res.data),
  });
};

export default usePosts;
