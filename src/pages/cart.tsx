import { CartArr } from "@/context/cart";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import { useWallet } from "@solana/wallet-adapter-react";
import { SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
import AuthModal from "@/components/modals/auth-modal";

export default function Cart({}) {
    const router = useRouter();

    const { publicKey, sendTransaction } = useWallet();

    const connection = new Connection("https://api.devnet.solana.com/");

    const [sum, setSum] = useState(0);
    const [error, setError] = useState("");
    const [modalState, setModalState] = useState("closed");

    // @ts-ignore
    const { cart, setCart } = useContext(CartArr);

    // Adding items in cart

    useEffect(() => {
        const nums: Array<number> = [];

        cart.forEach((item: any) => {
            nums.push(item.price);
        });

        const total = nums.reduce((acc, curr) => acc + curr, 0);
        setSum(total);
    }, [cart]);

    // Deleting items

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

    // Payments

    const onSendSolana = async () => {
        try {
            const recipientAddress = "ELWXFTJWoGv9YwmcTyDYno2DZntAR6XJdcMTb2jRHEy3";
            const sum = 100000000; // Replace with the desired amount of lamports

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey!,
                    toPubkey: new PublicKey(recipientAddress),
                    lamports: sum
                })
            );

            const options = {
                commitment: "confirmed"
            };

            const signature = await sendTransaction(transaction, connection, options as any);

            console.log("Transaction sent:", signature);
        } catch (error) {
            setError(`${error}`);
            console.log(error);
        }
    };


    useEffect(() => {
        if (
            error === "WalletNotConnectedError" ||
            error === "WalletNotSelectedError" ||
            !navigator.onLine
        ) {
            setError("ვერ შეიძენთ, რადგან კავშირი არ გაქვთ ინტერნეტთან ან საფულესთან.");
            setModalState("open");
        }
    }, [error]);

    return (
        <div className={"w-full"}>
            {error.length > 0 && (
                <AuthModal modalState={modalState}>
                    <div className="relative w-[700px] rounded-[10px] bg-white p-[20px] 2xl:w-[90vw]">
                        <div className="flex flex-col gap-[20px]">
                            <h1 className="text-[26px] font-bold text-center">შეფერხება</h1>
                            <div className="flex flex-col gap-[40px]">
                                <div>
                                    <p className="text-[22px] text-[red]">{error}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => {
                                            setModalState("closed");
                                        }}
                                        className="w-full translate-y-0 rounded-[10px] bg-[#e7c128] py-[12px] px-[20px] text-[20px] text-[black] outline-0 transition-all hover:bg-black hover:text-[#e7c128] active:translate-y-1">
                                        კარგი!
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={() => {
                                setModalState("closed");
                            }}
                            className="absolute top-[20px] right-[20px] cursor-pointer">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask
                                    id="mask0_112_7508"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="25"
                                    height="25">
                                    <rect
                                        x="0.354187"
                                        y="0.438477"
                                        width="24"
                                        height="24"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask0_112_7508)">
                                    <path
                                        d="M6.75419 19.4385L5.35419 18.0385L10.9542 12.4385L5.35419 6.83848L6.75419 5.43848L12.3542 11.0385L17.9542 5.43848L19.3542 6.83848L13.7542 12.4385L19.3542 18.0385L17.9542 19.4385L12.3542 13.8385L6.75419 19.4385Z"
                                        fill="#16110D"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </AuthModal>
            )}
            <div className={"mt-[50px] flex justify-center gap-[60px]"}>
                <div className={"flex flex-col gap-[80px]"}>
                    {cart.length === 0 ? (
                        <div>
                            <h1 className={"w-full text-center text-[34px] 2xl:text-[5vw]"}>
                                კალათაში არ გვაქვს ნივთები :(
                            </h1>
                        </div>
                    ) : (
                        cart.map((item: any) => (
                            <div className={"flex gap-[80px]"} key={item.id}>
                                <div
                                    className={
                                        "flex w-[600px] flex-col gap-[20px] break-all	 border border-black p-[10px] xl:w-[90vw]"
                                    }>
                                    <img
                                        src={item.imgSrc}
                                        className={"aspect-[3/2] w-full cursor-pointer object-contain"}
                                        onClick={() => router.push(`/item/${item.id}`)}
                                    />

                                    <div className={"flex flex-col justify-around"}>
                                        <div className={"flex flex-col gap-[10px]"}>
                                            <h1 className={"text-[20px] "}>ნივთი: {item.itemTitle}</h1>
                                            <p className={"text-[20px]"}>
                                                ცალის ფასი: {item.price / item.itemQuantity}₾
                                            </p>
                                            <p className={"text-[20px] font-bold"}>
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
                                            onClick={() => handleDelete(item.id)}>
                                            წაშლა
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    {cart.length > 0 && (
                        <div className={"mb-[50px] flex flex-col items-start gap-[20px]"}>
                            <h1 className={"text-[24px] lg:text-[4.5vw]"}>
                                ნივთები: {cart.length} (ცალი)
                            </h1>
                            <h1 className={"text-[24px] font-bold lg:text-[4.5vw]"}>
                                საბოლოო ფასი: {sum}₾ (ჯამში)
                            </h1>
                            <button
                                className={
                                    "w-full lg:w-[90vw] translate-y-0 rounded-[5px] bg-[#e7c128] px-[15px] py-[10px] text-[24px] lg:text-[20px] transition-all active:translate-y-1 outline-0 "
                                }
                                onClick={onSendSolana}>
                                შეძენა
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
