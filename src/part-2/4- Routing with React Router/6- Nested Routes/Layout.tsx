import { Outlet } from 'react-router';
import NavBar from './Navbar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
