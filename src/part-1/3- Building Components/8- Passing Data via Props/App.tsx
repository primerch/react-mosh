import "./App.css";
import ListGroup from "./8- Passing Data via Props.tsx";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const heading = "Cities";

  const props = { items: items, heading: heading };

  // When you write the component like this:
  // <ListGroup items={items} heading={heading} />
  // Internally, React converts it into plain JavaScript similar to this:
  // const props = { items: items, heading: heading };
  // ListGroup(props);

  return <ListGroup items={items} heading={heading} />;
  // return <ListGroup {...props} />;
}

export default App;
