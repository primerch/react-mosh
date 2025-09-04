import { useReducer } from 'react';
import reducer from './TaskReducer';

const TaskList = () => {
  //   const [tasks, setTasks] = useState<Task[]>([]);

  const [tasks, dispatch] = useReducer(reducer, []);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          //   setTasks([{ id: Date.now(), title: 'Task ' + Date.now() }, ...tasks])
          dispatch({
            type: 'ADD',
            task: { id: Date.now(), title: 'Task ' + Date.now() },
          })
        }
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <li>{task.title}</li>
            <button
              className="btn btn-secondary my-2"
              //   onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
              onClick={() => dispatch({ type: 'DELETE', taskId: task.id })}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
