import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useState } from "react";

interface Props {
  onClick: () => void;
}

export function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return status ? (
    <AiFillHeart size={20} color="red" onClick={toggle} />
  ) : (
    <AiOutlineHeart size={20} onClick={toggle} />
  );
}
