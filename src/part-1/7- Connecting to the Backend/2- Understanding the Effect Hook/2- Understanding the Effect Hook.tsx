import { useEffect, useRef } from "react";

export default function Test() {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input after the component mounts and on every re-render (side effect)
  // After Render
  useEffect(() => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <label htmlFor="name" className="label">
        Name
      </label>
      <input id="name" className="input" type="text" ref={inputRef} />
    </div>
  );
}
