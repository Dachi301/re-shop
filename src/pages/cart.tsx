import CartContext from "@/context/cart";
import React, { useContext } from "react";

type Props = {};

export default function ({}: Props) {
  const cart = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      <p>asdf</p>
    </div>
  );
}
