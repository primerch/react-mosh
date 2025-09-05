import './App.css';
import AuthProvider from './AuthProvider';
import LoginStatus from './LoginStatus';

function App() {
  return (
    <AuthProvider>
      <LoginStatus />
    </AuthProvider>
  );
}

export default App;
