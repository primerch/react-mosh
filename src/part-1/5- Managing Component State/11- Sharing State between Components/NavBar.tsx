import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div className="bg-amber-700">NavBar: {cartItemsCount}</div>;
};

export default NavBar;
