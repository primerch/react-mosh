import { useState } from "react";

// Props in React are similar to parameters used in JavaScript functions.
// In regular functions, parameters can be any type such as numbers, arrays,
// strings, or objects. However, React components always accept just one parameter,
// called 'props', and this parameter is always an object containing properties.
//
// Therefore, even though JSX syntax makes it look like you're passing multiple values,
// internally these values are combined into a single object called 'props'.
//
// Here we've defined the Props interface to describe clearly and strictly the shape and
// structure the props object should have.

interface Props {
  items: string[];
  heading: string;
}

export default function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  return (
    <>
      <h1 className="text-3xl">{heading}</h1>

      <ul className="divide-y divide-amber-300">
        {items.map((item, index) => (
          <li
            className="py-4"
            key={item}
            onClick={() => {
              setName(item);
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
