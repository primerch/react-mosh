import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () =>
  (await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")).data;

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // overwrite default settings
  });
};

export default useTodos;
