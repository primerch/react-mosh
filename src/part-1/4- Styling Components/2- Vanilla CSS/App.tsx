import "./App.css";
import ListGroup from "./2- Vanilla CSS.tsx";

function App() {
  const heading = "Countries";
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <ListGroup
      heading={heading}
      items={items}
      onSelectItem={(item) => console.log(item)}
    />
  );
}

export default App;
