import { useState } from "react";

export default function Game() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    // Approach A: Manually create a new object using the spread operator,
    // making sure to copy all nested objects to maintain immutability.
    setGame({ ...game, player: { ...game.player, name: "Reacher" } });

    // Approach B: Use Immer's produce function to update the nested state
    // in a more concise and readable way, while preserving immutability.
    // setGame(
    //   produce((draft) => {
    //     draft.player.name = "Reacher";
    //   }),
    // );
  };

  return (
    <>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Update Name</button>
    </>
  );
}
