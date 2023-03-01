import { createContext } from "react";

// Define interface type
interface CartType {
  id: number;
  itemTitle: string;
  price: number;
  itemQuantity: number;
  imgSrc: string;
}

// Creating the context object and passing the default values.

const cart: CartType[] = [];

const CartContext = createContext(cart);

export default CartContext;
