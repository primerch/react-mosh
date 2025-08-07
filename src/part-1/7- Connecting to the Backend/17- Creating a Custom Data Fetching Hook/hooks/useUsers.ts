import { useEffect, useState } from "react";
import userService, { type User } from "../services/user-service.ts";
import { CanceledError } from "../services/api-client.tsx";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const { request, cancel } = userService.getAll<User>();

    request
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        if (e instanceof Error) setError(e.message);
      });

    return () => cancel();
  }, []);

  return { users, error, setUsers, setError };
};

export default useUsers;
