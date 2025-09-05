import useAuth from './hooks/useAuth.ts';

const LoginStatus = () => {
  const { username, dispatch } = useAuth();

  if (username === '')
    return (
      <>
        <button
          className="btn btn-info"
          onClick={() => dispatch({ type: 'LOGIN', username: 'Reacher' })}
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
          onClick={() => dispatch({ type: 'LOGOUT' })}
        >
          LOGOUT
        </button>
      </>
    );
};

export default LoginStatus;
