import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

export default function ExpandableText({ maxChars, children }: Props) {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  function handleShowLess() {
    setShowAll(false);
  }

  return (
    <>
      <p
        style={
          showAll
            ? {}
            : {
                whiteSpace: "nowrap",
                width: `${maxChars}ch`,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }
        }
      >
        {children}
      </p>

      {!showAll && (
        <button className="btn btn-secondary" onClick={handleShowAll}>
          More
        </button>
      )}
      {showAll && (
        <button className="btn btn-secondary" onClick={handleShowLess}>
          Less
        </button>
      )}
    </>
  );
}
