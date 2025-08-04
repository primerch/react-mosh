import "./App.css";
import { produce } from "immer";
import { useState } from "react";
import NavBar from "./NavBar.tsx";
import Cart from "./Cart.tsx";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1️⃣", "Product 2️⃣"]);

  // const handleOnClear = (items: string[]) => setCartItems([]);
  const handleOnClick = () => {
    setCartItems(
      produce((draft) => {
        draft.length = 0;
      }),
    );
  };

  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleOnClick} />
    </>
  );
}

export default App;
