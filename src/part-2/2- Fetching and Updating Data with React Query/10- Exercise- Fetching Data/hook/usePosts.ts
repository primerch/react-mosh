import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () =>
  (await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")).data;

const usePosts = () => {
  return useQuery<Post[], Error>({ queryKey: ["posts"], queryFn: fetchPosts });
};

export default usePosts;
