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

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Reacher", phone: 19886005992 };
    setUsers([newUser, ...originalUsers]);

    axios
      .post<User>("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...originalUsers]);
      })
      .catch((e) => {
        setError(e.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete<User>("https://jsonplaceholder.typicode.com/users" + user.id)
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

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

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
                  onClick={() => deleteUser(user)}
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
