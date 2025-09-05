interface LoginAction {
  type: 'LOGIN';
  username: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type Action = LoginAction | LogoutAction;
const authReducer = (state: string, action: Action) => {
  if (action.type === 'LOGIN') return action.username;
  if (action.type === 'LOGOUT') return '';
  return state;
};

export default authReducer;
