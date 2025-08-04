/*
 * // --- What the Browser does (simplified) ---
// (Imagine this is deep inside the browser's engine)
function simulateBrowserFormSubmission() {
    const nativeFormEvent = {
        type: 'submit',
        target: '<form-DOM-element>', // Reference to the actual HTML form element
        preventDefault: () => { console.log("Browser's default prevented!"); }
        // ... other native event properties
    };

    // The browser dispatches this event, and it bubbles up...
    // Eventually, it reaches React's global listener
    ReactGlobalEventListener(nativeFormEvent);
}

// --- What React does (Simplified Internal Mechanism) ---

// This is the function you provide to React via JSX:
function yourReactHandleSubmit(syntheticEvent) {
    syntheticEvent.preventDefault(); // This is the SyntheticEvent's preventDefault
    console.log("Your form was submitted!");
    console.log("Event type:", syntheticEvent.type);
    // TypeScript, due to type definitions, knows `syntheticEvent` is a `FormEvent` here.
}

// React keeps track of which components have which event handlers
const reactComponentTree = {
    // ... other components
    formElement: {
        onSubmit: yourReactHandleSubmit // Storing a reference to YOUR function
    }
};

// This is React's "global listener" (simplified to only handle form submits)
function ReactGlobalEventListener(nativeEventFromBrowser) {
    // 1. Identify the original target and its React counterpart
    const targetElement = nativeEventFromBrowser.target;
    const reactNode = findReactNodeCorrespondingToDomElement(targetElement); // Very complex internal React logic

    // 2. Check if this React node has an 'onSubmit' handler
    if (reactNode && reactNode.onSubmit) {
        // 3. Create the SyntheticEvent (wrapper around the native event)
        const syntheticEvent = {
            type: nativeEventFromBrowser.type,
            target: nativeEventFromBrowser.target,
            preventDefault: () => nativeEventFromBrowser.preventDefault(), // Our Synthetic preventDefault calls the native one
            // ... copy and normalize other properties from nativeEvent
            // For a form, this would be a SyntheticFormEvent
        };

        // 4. CALL YOUR FUNCTION, passing the SyntheticEvent
        reactNode.onSubmit(syntheticEvent); // <-- THIS IS THE CORE!
    }
}

// --- How you use it in JSX (what you write) ---
// <form onSubmit={yourReactHandleSubmit}>...</form>

// --- What happens when you actually "submit the form" (e.g., click a submit button) ---
simulateBrowserFormSubmission(); // This would be triggered by the browser

 * */
import { FormEvent, useRef } from "react";

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label htmlFor="name" className="input">
          <span>Name</span>
          <input type="text" id="name" className="input" ref={nameRef} />
        </label>
      </div>
      <div className="mb-1">
        <label htmlFor="age" className="input">
          <span>Age</span>
          <input type="text" id="age" className="input" ref={ageRef} />
        </label>
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
