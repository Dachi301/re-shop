import { createContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useLocalStorage from "@/hooks/useLocalStorage";

// Creating the context object and passing the default values.

export const CartArr = createContext([]);

dynamic(() => require("@/hooks/useLocalStorage"), {
    ssr: false
});

function CartContext({ children }: any) {
    const [cart, setCart] = useLocalStorage("data", []);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted ? (
                <CartArr.Provider value={{ cart, setCart }}>{children}</CartArr.Provider>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default CartContext;

/**
 * import { createContext, useState } from "react";

export const Message_data = createContext(null);

function Context({ children }) {
  const [message, setMessage] = useState();

  return (
    <Message_data.Provider value={{ message, setMessage }}>
      {children}
    </Message_data.Provider>
  );
}

export default Context;
 * 
 */
