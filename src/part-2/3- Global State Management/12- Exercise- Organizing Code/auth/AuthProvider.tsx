import { useReducer, type ReactNode } from 'react';
import AuthContext from './AuthContext';
import authReducer from './authReducer';

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [username, dispatch] = useReducer(authReducer, '');

  return <AuthContext value={{ username, dispatch }}>{children}</AuthContext>;
};

export default AuthProvider;
