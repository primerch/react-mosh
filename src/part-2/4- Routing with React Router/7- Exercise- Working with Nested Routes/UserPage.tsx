import { Link, Outlet, useSearchParams } from 'react-router';

const users = [
  { id: 1, name: 'Mosh ' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Alice' },
];

const UserPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="flex-3/5">
        <ul className="list m-2 border border-amber-200">
          {users.map((user) => (
            <li className="list-row" key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-2/5">
        <Outlet />
      </div>
    </>
  );
};

export default UserPage;
