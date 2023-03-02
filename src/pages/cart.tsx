import CartContext, { CartArr } from "@/context/cart";
import React, { useContext } from "react";

type Props = {};

export default function ({}: Props) {
  const { cart, setCart } = useContext(CartArr);

  console.log(cart);

  return (
    <div>
      <p>asdf</p>
    </div>
  );
}
