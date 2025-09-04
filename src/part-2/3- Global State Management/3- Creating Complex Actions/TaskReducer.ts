interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}
type TaskAction = AddTask | DeleteTask;

// current state
const reducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type === 'ADD') return [action.task, ...tasks];
  if (action.type === 'DELETE')
    return tasks.filter((task) => task.id !== action.taskId);
  return tasks;
};

export default reducer;
