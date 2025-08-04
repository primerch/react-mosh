import { useState } from "react";

export default function Drink() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // The spread syntax (`...drink`) creates a copy of the existing drink object.
    // By specifying `price: 6` after the spread, the price property is updated while keeping all other properties unchanged.
    // If a property already exists, the later value (price: 6) overwrites the previous one from the spread.
    setDrink({ ...drink, price: 6 });
  };

  return (
    <>
      <button onClick={handleClick}>Update the price</button>
      {drink.price}
    </>
  );
}
