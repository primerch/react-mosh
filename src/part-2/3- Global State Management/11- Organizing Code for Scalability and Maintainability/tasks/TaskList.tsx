import { useContext } from 'react';
import TaskContext from './TaskContext';

const useTask = () => useContext(TaskContext);

const TaskList = () => {
  const { tasks, dispatch } = useTask();

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({
            type: 'ADD',
            task: { id: Date.now(), title: 'Task: ' + Date.now() },
          })
        }
      >
        ADD
      </button>
      <ul>
        {tasks.map((task) => (
          <li className="my-3 flex items-center justify-between">
            <div>{task.title}</div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => dispatch({ type: 'DELETE', taskId: task.id })}
              >
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
