import { useContext } from 'react';
import TaskContext from './TaskContext';

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD',
            task: { id: Date.now(), title: 'Task ' + Date.now() },
          })
        }
        className="btn btn-primary"
      >
        ADD
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="my-2 flex items-center justify-between">
            <div>{task.title}</div>
            <button
              className="btn btn-secondary"
              onClick={() => dispatch({ type: 'DELETE', taskId: task.id })}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
