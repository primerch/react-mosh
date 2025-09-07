import { Link } from 'react-router';

const users = [
  { id: 1, name: 'Reacher' },
  { id: 2, name: 'WANG' },
  { id: 3, name: 'Ruizhi' },
];
const UserListPage = () => {
  return (
    <>
      <ul className="list">
        {users.map((user) => (
          <li key={user.id} className="list-row">
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserListPage;
