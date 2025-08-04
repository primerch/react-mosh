import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

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
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(res.data);
      } catch (e) {
        setError((e as AxiosError).message);
      }
    };

    fetchUsers().catch((e) => console.log("ERROR..."));
  }, []);

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
              <tr>
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
