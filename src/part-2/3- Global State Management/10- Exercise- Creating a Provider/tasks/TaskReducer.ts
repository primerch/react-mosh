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

const taskReducer = (tasks: Task[], action: Action): Task[] => {
  if (action.type === 'ADD') return [...tasks, action.task];
  if (action.type === 'DELETE')
    return tasks.filter((task) => task.id !== action.taskId);
  return tasks;
};

export default taskReducer;
