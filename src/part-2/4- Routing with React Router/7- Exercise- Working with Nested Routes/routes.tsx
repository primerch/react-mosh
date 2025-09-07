import { createBrowserRouter } from 'react-router';
import Homepage from './Homepage';
import Layout from './Layout';
import UserDetail from './UserDetail';
import UserPage from './UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'users',
        element: <UserPage />,
        children: [
          {
            path: ':id',
            element: <UserDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
