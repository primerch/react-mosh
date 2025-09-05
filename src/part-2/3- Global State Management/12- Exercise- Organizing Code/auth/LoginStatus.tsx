import useAuth from './useAuth';

const LoginStatus = () => {
  const { username, dispatch } = useAuth();

  if (username === '')
    return (
      <>
        <div className="my-5">
          <a
            href="#"
            className="btn"
            onClick={() => dispatch({ type: 'LOGIN', username: 'Reacher' })}
          >
            LOGIN
          </a>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="my-5">
          {username}
          <a
            href="#"
            className="btn"
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            LOGOUT
          </a>
        </div>
      </>
    );
};

export default LoginStatus;
