import React, { useRef, useState } from "react";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input className="input mr-5" type="text" ref={ref} />
      <button className="btn btn-primary">Add</button>
    </form>
  );
};
export default TodoForm;
