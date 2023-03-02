import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CartContext from "@/context/cart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContext>
      <Header />
      <Component {...pageProps} />
    </CartContext>
  );
}
