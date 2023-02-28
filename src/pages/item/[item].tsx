import Header from "@/components/header";
import Items from "@/data/items";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ItemPage() {
    const router = useRouter();

    const { item } = router.query;

    const data = Array.isArray(Items) ? Items.filter((elem: any) => elem.id === Number(item)) : "";

    const [count, setCount] = useState(1);
    const [itemPrice, setItemPrice] = useState(data[0]?.price);
    const [isDisabled, setIsDisabled] = useState(false);
    const [itemObject, setItemObject] = useState({});
    // console.log(Number(item));

    // console.log(data);

    // console.log(Items.find((item: any) => item.id == Number(item)));

    // console.log(data);
    // console.log(data[0]?.price);

    const handleIncrement = () => {
        setCount(count + 1);
        setItemPrice(itemPrice + data[0].price);
    };

    const handleDecrement = () => {
        count === 1 ? setCount(1) : setCount(count - 1);

        if (itemPrice === data[0].price) {
            setItemPrice(data[0].price);
        } else {
            setItemPrice(itemPrice - data[0].price);
        }
    };

    useEffect(() => {
        console.log(itemPrice);
    }, []);

    // const handleIncrement$ = $(() => {
    //   state.count += 1
    //   state.itemPrice += item[0].price
    // })

    // const handleDecrement$ = $(() => {
    //   state.count === 1 ? (state.count = 1) : state.count--
    //   if (state.itemPrice === item[0].price) {
    //     state.itemPrice = item[0].price
    //   } else {
    //     state.itemPrice -= item[0].price
    //   }
    // })
    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.push("/");
    };
    return (
        <div>
            <div className={"px-[30px] mt-[50px]"}>
                <div className={"flex gap-[50px]"}>
                    <img src={`${data[0]?.imgSrc}`} className={"h-[500px] object-cover"} />
                    <div className={"flex flex-col"}>
                        <h1 className={"text-[7em]"}>{data[0]?.title}</h1>
                        <div className={"pl-[10px]"}>
                            <div className={"flex flex-col gap-[15px]"}>
                                <p className={"text-[22px] font-bold"}>ფასი: {data[0]?.price} ₾</p>
                                <div className={"flex items-center gap-[20px]"}>
                                    <button
                                        className={
                                            "rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px]"
                                        }
                                        onClick={handleIncrement}
                                    >
                                        +
                                    </button>
                                    <p>{count}</p>
                                    <button
                                        className={
                                            "rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px]"
                                        }
                                        onClick={handleDecrement}
                                    >
                                        -
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={
                                            "mt-[20px] font-bold flex translate-y-0 justify-start rounded-[10px] bg-[#e7c128] py-[20px] px-[20px] text-[20px] transition-all active:translate-y-1"
                                        }
                                        onClick={handleClick}
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
