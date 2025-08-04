/*
💡 Explanation and Context of Event Handlers and State Management:

In this component, the state (`alertVisible`) is handled entirely within the parent component context (`Dismiss`), clearly satisfying the React best practice of "lifting state up."

- State (`alertVisible`) lives in the parent component (`Dismiss`).
- The parent component passes down event handler functions (`onClick`, `onClose`) to the child components (`Button`, `Alert`) as props.
- When an event triggers (`onClick` in Button or `onClose` in Alert), the child component executes the function received as a prop.
- Importantly, the function invoked is actually defined in the parent context, meaning the state update or any logic inside these functions still happens within the parent component.
- Passing these functions as props to child components provides only **references** (similar to pointers) to the original event-handler functions located in the parent component. The child component itself doesn’t process or own the actual state—it just triggers the function.

🔵 Visualization of how state and handlers are managed here:

🔵 Dismiss Component (Parent)
│
│── defines state (`alertVisible`)
│── provides event handlers (`setAlertVisible`) ──> passed via props to children
│
├─ 🔴 Button Component (Child): Receives `onClick` prop (reference to parent's event handler)
│       │── Invokes parent's `onClick` handler to update parent's state (`alertVisible` to true)
│
└─ 🟢 Alert Component (Child): Receives `onClose` prop (reference to parent's event handler)
        │── Invokes parent's `onClose` handler to update parent's state (`alertVisible` to false)

✅ Benefits of this approach (lifting state):
    ✅ Single source of truth (state in one place: easier debug and predictability).
    ✅ Greater reusability and clearer separation of concerns for child components.
    ✅ Adheres to React principles of unidirectional data flow from parent to child.
*/
import { useState } from "react";
import Button from "./Button.tsx";
import Alert from "./Alert.tsx";

export default function Dismiss() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </>
  );
}
