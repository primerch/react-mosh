import type { Dispatch } from 'react';
import React from 'react';
import type { Action, Task } from './TaskReducer';

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<Action>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
