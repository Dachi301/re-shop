import CartContext, { CartArr } from "@/context/cart";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

/**
   * 
   * 
  const handleDelete$ = $((id: number) => {
    const element = state.cart.filter((item: any) => item.id === id)
    state.cartLength -= 1
    newState.sum -= element[0].price
    state.cart = state.cart.filter((item: any) => {
      return item.id !== id
    })
  })

   */

export default function ({}: Props) {
  const [sum, setSum] = useState(0);

  const { cart, setCart } = useContext(CartArr);

  useEffect(() => {
    const nums: Array<number> = [];

    cart.forEach((item: any) => {
      nums.push(item.price);
    });

    const total = nums.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [cart]);

  const handleDelete = (id: number) => {
    const elementIndex = cart.findIndex((item: any) => item.id === id);
    if (elementIndex === -1) {
      return; // item not found, do nothing
    }

    const element = cart[elementIndex];
    const newCart = [...cart];
    newCart.splice(elementIndex, 1);
    setCart(newCart);

    setSum(sum - element.price);
  };

  return (
    <div className={"w-full"}>
      <div className={"mt-[50px] flex justify-center gap-[60px]"}>
        <div className={"flex flex-col gap-[80px]"}>
          {cart.length === 0 ? (
            <div>
              <h1 className={"w-full text-center text-[34px]"}>
                კალათაში არ გვაქვს ნივთები :(
              </h1>
            </div>
          ) : (
            cart.map((item: any) => (
              <div className={"flex gap-[80px]"} key={item.id}>
                <div
                  className={
                    "flex w-[600px] flex-col gap-[20px] break-all	 border border-black p-[10px]"
                  }
                >
                  <img
                    src={item.imgSrc}
                    className={
                      "aspect-[3/2] w-full cursor-pointer object-contain"
                    }
                  />

                  <div className={"flex flex-col justify-around"}>
                    <div className={"flex flex-col gap-[10px]"}>
                      <h1 className={"text-[20px] "}>
                        ნივთი: {item.itemTitle}
                      </h1>
                      <p className={"text-[20px]"}>
                        ცალის ფასი: {item.price / item.itemQuantity}₾
                      </p>
                      <p className={"text-[20px]"}>
                        საბოლოო ფასი: {item.price}₾
                      </p>
                      <p className={"text-[20px] text-green-600"}>
                        რაოდენობა: {item.itemQuantity}x
                      </p>
                    </div>
                    <button
                      className={
                        " translate-y-0 rounded-[5px] bg-[red] p-[10px] text-white transition-all active:translate-y-1"
                      }
                      onClick={() => handleDelete(item.id)}
                    >
                      წაშლა
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Item to push */}

          {cart.length > 0 && (
            <div className={"mb-[50px] flex flex-col items-start gap-[20px]"}>
              <h1 className={"text-[24px]"}>ნივთები: {cart.length} (ცალი)</h1>
              <h1 className={"text-[24px]"}>საბოლოო ფასი: {sum}₾ (ჯამში)</h1>

              {/* <p className={"text-[24px]"}>ჯამი: {newsum}₾</p> */}
              <button
                className={
                  "w-full translate-y-0 rounded-[5px] bg-[#e7c128] px-[15px] py-[10px] text-[24px] transition-all active:translate-y-1 "
                }
              >
                შეძენა
              </button>
            </div>
          )}

          {/* <div className={"mb-[50px] flex flex-col items-start gap-[20px]"}>
            <h1 className={"text-[24px]"}>ნივთები: 2 (ცალი)</h1>
            <p className={"text-[24px]"}>ჯამი: 123₾</p>
            <button
              className={
                "w-full translate-y-0 rounded-[5px] bg-[#e7c128] px-[15px] py-[10px] text-[24px] transition-all active:translate-y-1 "
              }
            >
              შეძენა
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
