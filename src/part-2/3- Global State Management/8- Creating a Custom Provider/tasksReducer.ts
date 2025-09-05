export interface Task {
  id: number;
  title: string;
}

interface AddAction {
  type: 'ADD';
  task: Task;
}

interface DeleteAction {
  type: 'DELETE';
  taskId: number;
}

export type Action = AddAction | DeleteAction;

const tasksReducer = (tasks: Task[], action: Action): Task[] => {
  if (action.type === 'ADD') return [...tasks, action.task];
  if (action.type === 'DELETE')
    return tasks.filter((t) => t.id !== action.taskId);
  return tasks;
};

export default tasksReducer;
