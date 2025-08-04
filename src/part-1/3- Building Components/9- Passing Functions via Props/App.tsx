/*
Data Flow: Parent -> Child & Child -> Parent

Parent: Passes the onSelectItem callback function to the child via props.
Child: Calls onSelectItem(item) when an item is clicked, sending the selected item back to the parent.
Parent: Receives the data through the execution of handleSelectItem and processes it (e.g., logs it).
*/
import "./App.css";
import ListGroup from "./9- Passing Functions via Props.tsx";

function App() {
  const items = ["China", "Japan", "USA", "Australia", "Italy"];

  const handleSelectItem = (item: string): void => {
    console.log(item);
  };

  return (
    <ListGroup
      title="Countries"
      items={items}
      onSelectItem={handleSelectItem}
    />
  );
}

export default App;
