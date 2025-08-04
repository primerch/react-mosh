import React from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // 1. React SyntheticBaseEvent:
  // Browsers implement native events differently, creating inconsistencies across browsers.
  // To ensure event objects behave consistently and predictably, React provides its own event wrapper called "SyntheticBaseEvent".
  // React.MouseEvent extends SyntheticBaseEvent and wraps the native browser MouseEvent.
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) =>
    console.log(event);

  return (
    <>
      <h1 className="text-3xl">List</h1>

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-inside list-decimal divide-y divide-gray-200">
        {items.map((item, index) => (
          // 2. We pass a reference ('handleClick') here directly instead of invoking it ('handleClick()').
          // Invoking it immediately ('handleClick()') would execute the handler right away during component render.
          // Passing a function reference defers execution until the actual click event occurs at runtime.
          <li key={item} className="py-2" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
