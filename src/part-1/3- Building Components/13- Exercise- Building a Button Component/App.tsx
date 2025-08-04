import "./App.css";
import Button from "./13- Exercise- Building a Button Component.tsx";

function App() {
  return (
    <Button color="primary" onClick={() => console.log("Clicked")}>
      My Button
    </Button>
  );
}

export default App;
