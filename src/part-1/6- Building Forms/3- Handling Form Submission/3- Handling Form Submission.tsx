import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevents the page from refreshing and stops the default form submission, allowing you to handle the data manually (e.g., via JavaScript).
    console.log("Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="age" id="age" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
