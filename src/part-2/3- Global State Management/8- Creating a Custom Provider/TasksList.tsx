import { useContext } from 'react';
import TasksContext from './TasksContext';

const TasksList = () => {
  const { tasks, tasksDispatch } = useContext(TasksContext);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          tasksDispatch({
            type: 'ADD',
            task: { id: Date.now(), title: 'Task: ' + Date.now() },
          })
        }
      >
        ADD TASK
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="my-2 flex items-center justify-between">
            <div>{task.title}</div>
            <button
              className="btn btn-secondary"
              onClick={() => tasksDispatch({ type: 'DELETE', taskId: task.id })}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
