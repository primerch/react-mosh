/* ===================================================================================================
   Absolutely — this does feel like magic, but under the hood, it’s just functions calling functions with your data. Let me break it down in the simplest way:

   ⸻

   💡 Goal:

      When the form is submitted, your onSubmit(data) gets the latest input values automatically.

   ⸻

   🧱 Components:

      const { register, handleSubmit } = useForm();

       • register("fieldName"):
         - Tells React Hook Form: “Hey! Track this field.”
         - It attaches a ref and event handlers to your input so the library can watch the value.
       • handleSubmit(onSubmit):
         - This wraps your onSubmit function.
         - It handles the:
             1. Collecting all field values
             2. Validation (if any)
             3. Then calls your onSubmit(data) with the values

   ⸻

   🪄 What Happens Step-by-Step:

      Let’s walk through an imaginary version of what’s happening behind the scenes, in simplified terms:

      function useForm() {
        const formData = {};

        function register(name) {
          return {
            name,
            onChange: (e) => {
              formData[name] = e.target.value; // store the latest value
            },
          };
        }

        function handleSubmit(userCallback) {
          return (event) => {
            event.preventDefault(); // stop form from reloading
            userCallback(formData); // call your onSubmit with data
          };
        }

        return { register, handleSubmit };
      }

      Then when you use it:

      const { register, handleSubmit } = useForm();

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fieldName")} />
        <button>Submit</button>
      </form>

      It works like this:
        1. When the input changes, it stores the value in formData["fieldName"].
        2. When the form is submitted:
           • handleSubmit intercepts it
           • It collects all formData
           • Calls onSubmit(formData) for you

   ⸻

   🔁 Why It Feels Like “Function in Function”

      Because you’re doing:

      <form onSubmit={handleSubmit(onSubmit)}>

      Which is really:

      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmit(collectedFormData);
      }}>

      So yes — it’s:
       • You pass in onSubmit
       • handleSubmit wraps it
       • That wrapper is what gets called on submit

   ⸻

   ✅ Key takeaway

      This line:

      <form onSubmit={handleSubmit(onSubmit)}>

      Is sugar for:

      <form onSubmit={(event) => {
        event.preventDefault();
        const data = getAllInputValues();
        onSubmit(data);
      }}>

      You’re just passing your function into another function that:
        • Gets the form data
        • Then passes it to you

   ⸻

   Let me know if you want to see a full plain JS version without react-hook-form.
================================================================================================== */

import { FieldValues, useForm } from "react-hook-form";

export default function Form() {
  // Initialize useForm and get register and handleSubmit functions
  const { register, handleSubmit } = useForm();

  // Callback to handle form submission. Receives form data.
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="input">
          <span>Name</span>
          <input
            // Registers this input field for "name" in the form state
            {...register("name")}
            type="text"
            id="name"
            className="input"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="input">
          <span>Age</span>
          <input
            // Registers this input field for "age" in the form state
            {...register("age")}
            type="number"
            id="age"
            className="input"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
