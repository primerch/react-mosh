// Example of Controlled Components in React
// ------------------------------------------
// In React, a controlled component is an input form element whose value is controlled by React state.
// The form data is handled by the component's state and updated with setState (or useState in function components).
// This gives you full control over user input, validation, and how the UI responds to changes.
//
// - Controlled: useState = React is the boss.
// - Uncontrolled: useRef = DOM is the boss, React just peeks in when needed.

import { FormEvent, useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="input">
          <span>Name</span>
          <input
            value={person.name}
            type="text"
            id="name"
            className="input"
            onChange={(event) => {
              // 1. Update the 'name' field using the spread operator
              setPerson({ ...person, name: event.target.value });
              // 2. Alternatively, use Immer to update the 'name' field:
              /*
              setPerson(
                produce((draft) => {
                  draft.name = event.target.value;
                }),
              );
              */
            }}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="input">
          <span>Age</span>
          <input
            // Controlled Component
            value={person.age}
            type="number"
            id="age"
            className="input"
            onChange={(event) =>
              // Keep 'age' as a string to match the initial state and avoid type error
              setPerson({ ...person, age: event.target.value })
            }
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
