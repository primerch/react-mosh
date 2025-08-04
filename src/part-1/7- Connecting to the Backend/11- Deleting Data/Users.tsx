import { useEffect, useState } from "react";
import axios, { type AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
  phone: number;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((e) => {
        setUsers(originalUsers);
      });
  };

  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: abortController.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError((e as AxiosError).message);
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  return (
    <>
      {loading && <span className="loading loading-dots loading-xl" />}

      {error && <div className="text-error">{error}</div>}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  onClick={() => onDelete(user)}
                  className="btn btn-error btn-outline"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
