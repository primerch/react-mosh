import axios from "axios";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    placeholderData: keepPreviousData,
  });
};

export default usePosts;
