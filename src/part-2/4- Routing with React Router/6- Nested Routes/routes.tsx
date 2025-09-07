import { createBrowserRouter } from 'react-router';
import Homepage from './Homepage';
import Layout from './Layout';
import UserDetailPage from './UserDetailPage';
import UserListPage from './UserListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        // index: true, we can also set the index to true , if the default path for the outlet is homepage
        element: <Homepage />,
      },
      {
        path: 'users',
        element: <UserListPage />,
      },
      {
        path: 'users/:id',
        element: <UserDetailPage />,
      },
    ],
  },
]);

export default router;
