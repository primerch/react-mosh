import type { Dispatch } from 'react';
import React from 'react';
import type { Action } from '../reducers/authReducer';

interface AuthContextType {
  username: string;
  dispatch: Dispatch<Action>;
}
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
