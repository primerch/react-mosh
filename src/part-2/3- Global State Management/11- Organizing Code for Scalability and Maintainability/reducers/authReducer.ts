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

export default authReducer;
