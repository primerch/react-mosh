import { useState } from "react";
import { produce } from "immer";

export default function Bug() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  // Marks the bug with id 1 as fixed using Immer's produce
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((n) => n.id === 1);
        if (bug) bug.fixed = true;
      }),
    );
  };

  return (
    <>
      <button onClick={handleClick}>Fix Bug</button>
      <ul>
        {bugs.map((bug) => (
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
