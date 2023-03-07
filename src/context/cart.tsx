import { createContext, useState } from "react";

// Creating the context object and passing the default values.

export const CartArr = createContext([]);

function CartContext({ children }: any) {
    const [cart, setCart] = useState([]);

    return <CartArr.Provider value={{ cart, setCart }}>{children}</CartArr.Provider>;
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
