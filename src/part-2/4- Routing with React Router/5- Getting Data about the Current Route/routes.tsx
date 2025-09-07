import { createBrowserRouter } from 'react-router';

import UserDetailPage from './UserDetailPage';

const router = createBrowserRouter([
  { path: '/users/:id', element: <UserDetailPage /> },
]);

export default router;
