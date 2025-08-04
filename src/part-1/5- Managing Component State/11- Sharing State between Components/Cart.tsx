interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="bg-red-300" onClick={() => onClear()}>
        Clear
      </button>
    </>
  );
};

export default Cart;
