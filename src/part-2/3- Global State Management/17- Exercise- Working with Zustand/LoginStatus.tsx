import useAuthStore from './AuthStore';

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user === '')
    return (
      <>
        <button className="btn btn-primary" onClick={() => login('Ruizhi')}>
          Login
        </button>
      </>
    );
  else
    return (
      <>
        {user}
        <button className="btn btn-primary" onClick={() => logout()}>
          Logout
        </button>
      </>
    );
};

export default LoginStatus;
