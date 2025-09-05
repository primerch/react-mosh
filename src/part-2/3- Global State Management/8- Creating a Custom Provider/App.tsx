import { useReducer } from 'react';
import './App.css';
import AuthProvider from './part-2/3- Global State Management/8- Creating a Custom Provider/AuthProvider';
import LoginStatus from './part-2/3- Global State Management/8- Creating a Custom Provider/LoginStatus';
import TasksContext from './part-2/3- Global State Management/8- Creating a Custom Provider/TasksContext';
import TasksList from './part-2/3- Global State Management/8- Creating a Custom Provider/TasksList';
import tasksReducer from './part-2/3- Global State Management/8- Creating a Custom Provider/tasksReducer';
function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, tasksDispatch }}>
        <LoginStatus />
        <TasksList />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
