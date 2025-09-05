import type { Dispatch } from 'react';
import React from 'react';
import type { Action, Task } from './tasksReducer';

interface TasksContextType {
  tasks: Task[];
  tasksDispatch: Dispatch<Action>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType,
);

export default TasksContext;
