import './App.css';
import AuthProvider from './part-2/3- Global State Management/11- Organizing Code for Scalability and Maintainability/AuthProvider';
import LoginStatus from './part-2/3- Global State Management/11- Organizing Code for Scalability and Maintainability/LoginStatus';
import {
  TaskList,
  TaskProvider,
} from './part-2/3- Global State Management/11- Organizing Code for Scalability and Maintainability/tasks';
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
