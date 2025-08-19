import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data),
  });
};
