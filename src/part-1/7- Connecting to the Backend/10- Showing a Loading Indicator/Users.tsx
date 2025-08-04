import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })

      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-error">{error}</p>}

      {loading && <div className="loading"></div>}

      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              {<td>{user.name}</td>}
              {<td>{user.email}</td>}
              {<td>{user.phone}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
