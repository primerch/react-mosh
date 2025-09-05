import { useReducer, type ReactNode } from 'react';
import AuthContext from './contexts/AuthContext';
import authReducer from './reducers/authReducer';

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [username, dispatch] = useReducer(authReducer, '');

  return <AuthContext value={{ username, dispatch }}>{children}</AuthContext>;
};

export default AuthProvider;
