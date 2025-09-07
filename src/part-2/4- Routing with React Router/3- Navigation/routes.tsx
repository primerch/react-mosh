import { createBrowserRouter } from 'react-router';

import ContactPage from './ContactPage';
import Homepage from './Homepage';
import UserListPage from './UserListPage';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/users', element: <UserListPage /> },
  { path: '/contact', element: <ContactPage /> },
]);

export default router;
