import { createBrowserRouter } from 'react-router';

import Homepage from './Homepage';
import UserListPage from './UserListPage';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/users', element: <UserListPage /> },
]);

export default router;
