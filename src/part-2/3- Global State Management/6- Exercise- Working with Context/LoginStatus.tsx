import { useContext } from 'react';
import AuthContext from './LoginContext';

const LoginStatus = () => {
  const { user: username, dispatch } = useContext(AuthContext);

  return username === '' ? (
    <>
      {username}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: 'LOGIN', username: 'ruizhi' })}
      >
        <a href="#">login</a>
      </button>
    </>
  ) : (
    <>
      {username}
      <button onClick={() => dispatch({ type: 'LOGOUT' })}>
        <a href="#" className="btn btn-secondary">
          logout
        </a>
      </button>
    </>
  );
};

export default LoginStatus;
