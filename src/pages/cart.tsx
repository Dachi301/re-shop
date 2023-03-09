import { CartArr } from "@/context/cart";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";

export default function Cart({}) {
  const router = useRouter();

  // const { connection } = useConnection();
  // const { publicKey, sendTransaction } = useWallet();

  // Payments

  const [sum, setSum] = useState(0);

  const { cart, setCart } = useContext(CartArr);

  const handlePaymentClick = async () => {
    // const recipient = "5dcR97YBYnxjszLbJoxobpcYDEo8cHt2sEqsn1Dko2v7";
    // await sendPayment(recipient, sum);
    // const connection = new Connection("https://api.mainnet-beta.solana.com");
    // const tokenSenderPublicKey = new PublicKey(
    //   "ELWXFTJWoGv9YwmcTyDYno2DZntAR6XJdcMTb2jRHEy3"
    // );
    // const senderTokenAccount = await connection.getParsedAccountInfo(
    //   tokenSenderPublicKey
    // );
    // const senderTokenAccountData = senderTokenAccount.value.data;
    // const senderTokenAccountOwner = senderTokenAccount.value.owner;
    // const token = new Token(
    //   connection,
    //   TOKEN_PROGRAM_ID,
    //   senderTokenAccountOwner,
    //   null
    // );
    // const transaction = new Transaction().add(
    //   Token.createTransferInstruction(
    //     TOKEN_PROGRAM_ID,
    //     tokenSenderPublicKey,
    //     "5dcR97YBYnxjszLbJoxobpcYDEo8cHt2sEqsn1Dko2v7",
    //     senderTokenAccountOwner,
    //     [],
    //     1
    //   )
    // );
    // const { blockhash } = await connection.getRecentBlockhash();
    // transaction.recentBlockhash = blockhash;
    // const signedTransaction = await connection.signTransaction(transaction, []);
    // const txid = await connection.sendRawTransaction(
    //   signedTransaction.serialize()
    // );
    // await connection.confirmTransaction(txid, "processed");
    // // WE MUST DISCUSS ABOUT THAT WITH GIO CTO NOT GIO SOLANA
    // transaction.feePayer = FEE_PAYER_PUBLIC_KEY;
  };

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

  return (
    <div className={"w-full"}>
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
                  }
                >
                  <img
                    src={item.imgSrc}
                    className={
                      "aspect-[3/2] w-full cursor-pointer object-contain"
                    }
                    onClick={() => router.push(`/item/${item.id}`)}
                  />

                  <div className={"flex flex-col justify-around"}>
                    <div className={"flex flex-col gap-[10px]"}>
                      <h1 className={"text-[20px] "}>
                        ნივთი: {item.itemTitle}
                      </h1>
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
                      onClick={() => handleDelete(item.id)}
                    >
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
                onClick={handlePaymentClick}
              >
                შეძენა
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
