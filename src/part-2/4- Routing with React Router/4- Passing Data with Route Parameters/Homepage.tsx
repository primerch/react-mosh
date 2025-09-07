import { Link } from 'react-router';

const Homepage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quasi?
      </p>

      <Link to="/users" className="btn btn-primary">
        Users
      </Link>
    </>
  );
};

export default Homepage;
