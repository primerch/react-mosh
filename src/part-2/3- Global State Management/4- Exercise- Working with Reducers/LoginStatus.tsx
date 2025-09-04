import { useReducer } from 'react';
import loginStatusReducer from './LoginStatusReducer';

const LoginStatus = () => {
  const [username, dispatch] = useReducer(loginStatusReducer, '');

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
