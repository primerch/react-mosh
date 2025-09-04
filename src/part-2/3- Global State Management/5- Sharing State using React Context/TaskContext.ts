import type { Dispatch } from 'react';
import React from 'react';
import type { Task, TaskAction } from './TaskListReducer';

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
