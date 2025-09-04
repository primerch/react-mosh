import type { Task } from './TaskList';

interface Action {
  type: 'ADD' | 'DELETE';
  payload?: number;
}

const reducer = (state: Task[], action: Action) => {
  if (action.type === 'ADD')
    return [{ id: Date.now(), title: 'Task ' + Date.now() }, ...state];
  if (action.type === 'DELETE')
    return state.filter((task) => task.id !== action.payload);
  return state;
};

export default reducer;
