import { useState } from "react";
import { produce } from "immer";

export default function Cart() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "🧅", quantity: 1 },
      { id: 2, title: "🍏", quantity: 1 },
    ],
  });

  const handleClick = () => {
    // Approach A: Update the state immutably by creating a new object
    // and mapping through items to update the quantity of a specific item.
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item,
    //   ),
    // });

    // Approach B: Use Immer's produce to handle the nested update in a more concise way.
    // This allows you to write "mutating" code in the callback while Immer ensures immutability.
    setCart(
      produce((draft) => {
        draft.items[0].quantity++;
      }),
    );
  };

  return (
    <>
      <table className="table-zebra table-md border border-red-800">
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>quantity</th>
        </tr>
        {cart.items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </table>
      <button className="btn btn-primary" onClick={handleClick}>
        Change Quantity
      </button>
    </>
  );
}
