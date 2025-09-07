import { Link } from 'react-router';

export const Nav = () => {
  return (
    <div className="navbar flex justify-between bg-pink-200">
      <div>
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users" className="ml-5">
          Users
        </Link>
      </div>
    </div>
  );
};
