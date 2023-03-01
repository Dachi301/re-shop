import Header from "@/components/header";
import CartContext from "@/context/cart";
import Items from "@/data/items";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function ItemPage() {
  const router = useRouter();

  const { item } = router.query;

  const data = Items.find((elem: any) => elem.id === Number(item));

  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(data?.price);
  const [isDisabled, setIsDisabled] = useState(false);
  const [itemObject, setItemObject] = useState({});

  const cart = useContext(CartContext);

  useEffect(() => {
    if (itemPrice === undefined) {
      setItemPrice(data?.price);
    }
  });

  const handleIncrement = () => {
    setCount(count + 1);
    setItemPrice(itemPrice + data?.price);
  };

  const handleDecrement = () => {
    count === 1 ? setCount(1) : setCount(count - 1);

    if (itemPrice === data?.price) {
      setItemPrice(data?.price);
    } else {
      setItemPrice(itemPrice - data?.price);
    }
  };

  const handleDisableButton = () => {
    cart.forEach((element: any) => {
      if (element.id === data?.id) {
        setIsDisabled(true);
      }
    });
  };

  const handleAddItemToCart = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const itemToPush = {
      id: data?.id,
      itemTitle: data?.title,
      price: itemPrice,
      itemQuantity: count,
      imgSrc: data?.imgSrc,
    };

    cart.push(itemToPush);
    handleDisableButton();

    console.log(itemToPush);
  };

  useEffect(() => {
    handleDisableButton();
  }, []);

  return (
    <div>
      <div className={"px-[30px] mt-[50px]"}>
        <div className={"flex gap-[50px]"}>
          <img src={`${data?.imgSrc}`} className={"h-[500px] object-cover"} />
          <div className={"flex flex-col"}>
            <h1 className={"text-[7em]"}>{data?.title}</h1>
            <div className={"pl-[10px]"}>
              <div className={"flex flex-col gap-[15px]"}>
                <p className={"text-[22px] font-bold"}>
                  ფასი: {isDisabled ? data?.price : itemPrice} ₾
                </p>
                <div className={"flex items-center gap-[20px]"}>
                  <button
                    className={`rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] ${
                      isDisabled && "opacity-[0.6] active:translate-y-0"
                    }`}
                    onClick={handleIncrement}
                    disabled={isDisabled ? true : false}
                  >
                    +
                  </button>
                  <p>{isDisabled ? 1 : count}</p>
                  <button
                    className={`rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px] ${
                      isDisabled && "opacity-[0.6] active:translate-y-0"
                    }`}
                    onClick={handleDecrement}
                    disabled={isDisabled ? true : false}
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    className={`mt-[20px] font-bold flex translate-y-0 justify-start rounded-[10px] bg-[#e7c128] py-[20px] px-[20px] text-[20px] transition-all active:translate-y-1 ${
                      isDisabled && "opacity-[0.6] active:translate-y-0"
                    }`}
                    onClick={handleAddItemToCart}
                    disabled={isDisabled}
                  >
                    დამატება კალათაში
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
