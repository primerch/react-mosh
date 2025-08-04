/* 📌 Section A: Why doesn't directly setting selectedIndex = index work?

   Problem lines:
     let selectedIndex = -1;

     onClick={() => {
       selectedIndex = index;
     }}

   Explanation:
   - Regular JavaScript variables reset to their initial value whenever the component updates.
   - React doesn't watch regular JavaScript variables. It only notices specially tracked React state variables.
   - So, if you directly set "selectedIndex", React won't know it changed. It won't show a new selection.
   - Your changes get reset every component render.
*/

/* 📌 Section B: Why does React use the word "Hook"?

   Plain explanation:
   - Think of React features (like state) as hooks on the wall.
   - Your React functions "hook onto" these built-in React features.
   - It's a clear and simple word meaning your code connects or attaches itself easily to features provided automatically by React.
*/

/* 📌 Section C: useState (React state) clear explanations:

   ✅ C1. Why declare state this way around:
      const [selectedIndex, setSelectedIndex] = useState(-1);

      Explanation:
      - React creates and tracks state for you.
      - React gives you the state value and a function to update it.
      - You just decide the names afterward, after calling useState.

   ✅ C2. What are the two items useState gives you:
      Explanation:
      1. The current state value (React always remembers it)
      2. A function React creates for you that tells React to update the state value (when you call this, React knows to visually update your page again)

      Example:
      - First, `selectedIndex` starts as -1 (no selection yet).
      - You click item 2; call `setSelectedIndex(2)` — telling React "state changed!"
      - React updates and sets current state `selectedIndex` to 2 automatically for next render.

   ✅ C3. How exactly React knows what `setSelectedIndex` does:
      Explanation:
      - React already created this function internally, it knows exactly what needs updating.
      - You never define `setSelectedIndex` manually, React handles it completely.

   ✅ C4. Why React uses this updater function, rather than direct variable modification:
      Explanation:
      - React needs you to clearly signal "Update NOW!" to draw any changes.
      - A regular JavaScript variable won't signal React clearly.
      - Calling `setSelectedIndex` explicitly alerts React that something important changed, so React updates visually.
*/

/* 📌 Section D: Each Component Manages Its OWN Independent State

   Simple explanation:
   - Every React component keeps its own state separate from others.
   - When you reuse components, each one remembers its own separate state.
*/

/* 📌 Section E: When to directly use function reference in onClick, and when to wrap in arrow function?

✅ E1. Using function reference directly (no parentheses, no arrow function):
  Example:
    <button onClick={handleClick}>Click Me</button>

  Explanation:
    - When your event-handler function doesn't require custom arguments (other than React's event parameter), you can pass it directly.
    - React will automatically call it at the correct time (upon click).

⚠️ E2. Using inline arrow function (Why can't you directly invoke the function?):
  Example:
    <button onClick={() => handleClick(id)}>Click Me</button>

  Explanation:
    - If you directly invoke the function (e.g., onClick={handleClick(id)}), JavaScript immediately runs it during render. This is usually unintended and will make your handler execute even without a click event.
    - Wrapping it in an inline arrow function prevents immediate invocation, delaying execution until the actual click event occurs.
    - It allows you to properly pass extra arguments or custom logic to the handler without immediate execution at render.
*/

import { useState } from "react";

export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  return (
    <>
      <h1 className="text-3xl">List</h1>

      {items.length === 0 && <p>No item found</p>}

      <ul className="divide-y divide-amber-300">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "bg-blue-400 py-4" : "py-4"}
            key={item}
            onClick={() => {
              setSelectedIndex(index); // tell React that selected item changed
              setName(item); // tell React that selected name changed
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
