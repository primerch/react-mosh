import { useState } from "react";

export default function Bug() {
  // Initializes the state with a list of bugs
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  // Marks the bug with id 1 as fixed
  const handleClick = () => {
    // Alternative approach:
    // const fixedBug = { ...bugs[0], fixed: true };
    // setBugs([fixedBug, bugs[1]]);

    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <button onClick={handleClick}>Fix Bug</button>
      <ul>
        {bugs.map((bug) => (
          // Note: The key should be bug.id, not the string "bug.id"
          <li key={bug.id}>
            <div>
              <span>{bug.id}</span>
              <span>{bug.title}</span>
              <span>{bug.fixed ? "✅" : "❎"}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
