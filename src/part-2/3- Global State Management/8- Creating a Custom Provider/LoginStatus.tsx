import { useContext } from 'react';
import AuthContext from './AuthContext';

const LoginStatus = () => {
  const { username, authDispatch } = useContext(AuthContext);

  if (username === '')
    return (
      <>
        <button
          className="btn btn-info"
          onClick={() => authDispatch({ type: 'LOGIN', username: 'Reacher' })}
        >
          LOGIN
        </button>
      </>
    );
  else
    return (
      <>
        {username}
        <button
          className="btn-btn-primary"
          onClick={() => authDispatch({ type: 'LOGOUT' })}
        >
          LOGOUT
        </button>
      </>
    );
};

export default LoginStatus;
