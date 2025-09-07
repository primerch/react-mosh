import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to="/" className="btn btn-neutral">
        Home
      </Link>
      <Link to="/users" className="btn btn-secondary">
        User
      </Link>
    </div>
  );
};

export default NavBar;
