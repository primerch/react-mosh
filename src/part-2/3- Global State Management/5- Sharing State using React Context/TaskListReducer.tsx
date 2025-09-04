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
// sdfsdfsdfsdfkkkkkkkkkkkkkkkkkkkkkkkkk
export type TaskAction = AddAction | DeleteAction;

const taskListReducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type === 'ADD') return [action.task, ...tasks];
  if (action.type === 'DELETE')
    return tasks.filter((task) => task.id !== action.taskId);
  return tasks;
};

export default taskListReducer;

