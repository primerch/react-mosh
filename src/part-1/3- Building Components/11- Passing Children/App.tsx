import "./App.css";
import Alert from "./11- Passing Children.tsx";

function App() {
  return (
    <Alert>
      <strong>Hello</strong> World
    </Alert>
  );
}

/* ✨ UNDERSTANDING CHILDREN IN PRACTICE:
   - 🧩 The Alert component above doesn't have fixed content. We pass content as children instead.
   - 🎯 Easier readability: You see exactly what's inside Alert without looking inside the component itself.
   - ⏰ Quick changes: Easily change what's inside <Alert> tags without altering the Alert component itself.
*/

export default App;
