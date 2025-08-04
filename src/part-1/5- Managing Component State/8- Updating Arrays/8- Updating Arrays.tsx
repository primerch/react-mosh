import { useState } from "react";

export default function Tag() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <>
      <button onClick={handleClick}>Add Tag</button>

      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </>
  );
}
