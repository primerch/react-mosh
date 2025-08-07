import type { User } from "./services/user-service.ts";
import userService from "./services/user-service.ts";
import useUsers from "./hooks/useUsers.ts";

export default function UsersApp() {
  const { users, error, setUsers, setError } = useUsers();

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Reacher", email: "macryze@icloud.com" };

    setUsers([...originalUsers, newUser]);

    userService
      .create<User>(newUser)
      .then(({ data }) => setUsers([...originalUsers, data]))
      .catch((e) => {
        setError(e.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((e) => {
      setError(e);
      setUsers(originalUsers);
    });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // Since we have a complete user object, we can use either:
    // PUT - for full resource replacement (recommended when sending complete object)
    // PATCH - for partial updates (current implementation)
    userService
      .update<User>(updatedUser)
      .then((res) => console.log(res))
      .catch((e) => {
        setError(e.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <div className="text-error">{error}</div>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-secondary btn-outline"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-error"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
