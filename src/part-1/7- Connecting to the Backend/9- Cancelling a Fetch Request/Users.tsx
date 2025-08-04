import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal },
        );
        setUsers(res.data);
      } catch (e) {
        if (e instanceof CanceledError) return; // Ignore abort errors
        setError((e as AxiosError).message);
      }
    };

    fetchUsers().catch((e) => console.log("ERROR..."));

    // Cleanup runs either:
    // 1. Before the next effect execution (when dependencies change)
    // 2. When the component unmounts
    return () => controller.abort();
  }, []); // <-- Add dependency array to control when the effect runs

  return (
    <>
      {error && <p className="text-error">{error}</p>}
      {!error && (
        <table className="table-zebra table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
