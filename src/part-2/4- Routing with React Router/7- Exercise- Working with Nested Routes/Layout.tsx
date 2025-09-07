import { Outlet } from 'react-router';
import { Nav } from './Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
