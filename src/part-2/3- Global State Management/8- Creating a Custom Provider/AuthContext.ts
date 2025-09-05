import type { Dispatch } from "react";
import type { Action } from "./authReducer";
import React from "react";

interface AuthContextType {
    username: string;
    authDispatch: Dispatch<Action>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
