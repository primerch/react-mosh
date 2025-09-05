import { useReducer, type ReactNode } from 'react';
import AuthContext from './AuthContext';

interface LoginAction {
  type: 'LOGIN';
  username: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type Action = LoginAction | LogoutAction;

const authReducer = (username: string, action: Action): string => {
  if (action.type === 'LOGIN') return action.username;
  if (action.type === 'LOGOUT') return '';
  return username;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [username, dispatch] = useReducer(authReducer, '');

  return <AuthContext value={{ username, dispatch }}>{children}</AuthContext>;
};

export default AuthProvider;
