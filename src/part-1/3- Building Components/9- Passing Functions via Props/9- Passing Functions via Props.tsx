/*
What is a Callback Function?

A callback function is a function that:

You pass to another function or component as an argument.
Gets called back (executed) later, usually when something specific happens, like an event.
Think of it like handing someone a note with instructions and saying, “Do this when the time is right.” The “calling back” part means that the function isn’t run right away—it’s saved and used later.

The parent gives the function to the child and says, “Call me back when the user does something (like clicking an item).”
The child waits until that event happens, then calls back to the parent by running the function.
It’s not executed immediately when it’s passed—it’s “called back” later, based on an action. This is the key idea!
*/
import { useState } from "react";

interface Props {
  title: string;
  items: string[];
  onSelectItem: (item: string) => void;
}
export default function ListGroup({ title, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-5xl">{title}</h1>

      {items.length === 0 && <p>No item found</p>}

      <ul className="divide-y divide-amber-300">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);

              onSelectItem(item);
            }}
            className={selectedIndex === index ? "bg-amber-300 py-4" : "py-4"}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
