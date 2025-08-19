import axios from "axios";

import { useQuery } from "@tanstack/react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
  });
};

export default usePosts;
