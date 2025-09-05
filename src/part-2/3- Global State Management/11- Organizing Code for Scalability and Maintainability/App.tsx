import './App.css';
import AuthProvider from './part-2/3- Global State Management/10- Exercise- Creating a Provider/auth/AuthProvider';
import LoginStatus from './part-2/3- Global State Management/10- Exercise- Creating a Provider/auth/LoginStatus';
import TaskList from './part-2/3- Global State Management/10- Exercise- Creating a Provider/tasks/TaskList';
import TaskProvider from './part-2/3- Global State Management/10- Exercise- Creating a Provider/tasks/TaskProvider';
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <LoginStatus />
        <TaskList />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
