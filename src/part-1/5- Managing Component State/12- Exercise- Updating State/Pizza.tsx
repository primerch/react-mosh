import { useState } from "react";
import { produce } from "immer";

export default function Pizza() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["🍄"],
  });

  const handleClick = () => {
    // Approach A: Update state immutably by creating a new object and a new toppings array.
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "🧀"] });

    // Approach B: Use Immer's produce to update state in a more concise and readable way:
    // This allows you to "mutate" a draft state, while Immer produces the immutable next state.
    setPizza(
      produce((draft) => {
        draft.toppings.push("🧀");
      }),
    );
  };

  return (
    <>
      <ul>
        {pizza.toppings.map((topping) => (
          <li className="mr-3 inline text-3xl" key={topping}>
            {topping}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Add TOPPING
      </button>
    </>
  );
}
