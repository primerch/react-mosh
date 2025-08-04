import { useState } from "react";
import "./2- Vanilla CSS.css";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ heading, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {items.map((item, idx) => (
          <li
            className={idx === selectedIndex ? "bg-pink-200 py-4" : "py-4"}
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(idx);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
