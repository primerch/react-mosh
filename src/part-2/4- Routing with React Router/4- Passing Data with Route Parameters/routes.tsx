import { createBrowserRouter } from 'react-router';

import Homepage from './Homepage';
import UserDetailPage from './UserDetailPage';
import UserListPage from './UserListPage';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/users', element: <UserListPage /> },
  { path: '/users/:id', element: <UserDetailPage /> },
]);

export default router;
