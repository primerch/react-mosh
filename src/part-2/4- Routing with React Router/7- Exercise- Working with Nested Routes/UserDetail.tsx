import { useParams } from 'react-router';

const UserDetail = () => {
  const { id } = useParams();
  return <div className="m-3 flex-2/5">User {id}</div>;
};

export default UserDetail;
