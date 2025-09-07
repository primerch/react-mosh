import { useLocation, useParams, useSearchParams } from 'react-router';

const UserDetailPage = () => {
  // http://localhost:5173/users/1?name=ruizhi&age=40
  
  // 1.
  const params = useParams();
  console.log(params);

  // 2
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.toString()); // to see the query string
  console.log(searchParams.get('name'));

  // 3.
  const location = useLocation();
  // {
  //     "pathname": "/users/2",
  //     "search": "?name=ruizhi&age=40",
  //     "hash": "",
  //     "state": null,
  //     "key": "default"
  // }
  console.log(location);

  return <div>UserDetailPage</div>;
};

export default UserDetailPage;
