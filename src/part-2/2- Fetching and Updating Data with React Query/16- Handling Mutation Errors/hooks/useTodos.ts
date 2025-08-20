import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data),
  });

export default useTodos;
