import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CartContext from "@/context/cart";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={cart}>
      <Header />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}
