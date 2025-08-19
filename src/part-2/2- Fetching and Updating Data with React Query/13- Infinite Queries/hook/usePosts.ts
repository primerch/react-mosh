import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["posts", query],
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < query.pageSize) return undefined;
      return allPages.length + 1;
    },
  });
};

export default usePosts;
