"use client";

import CartContext from "@/context/cart";
import Link from "next/link";

import { useRouter } from "next/router";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Header = function (_props: any) {
  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/");
    // console.log("asdsfdsfs");
  };

  const cart = useContext(CartContext);

  return (
    <header className="flex items-center justify-between bg-[#e7c128] px-[30px] py-[20px]">
      <button
        className="cursor-pointer text-[26px] text-white"
        onClick={handleClick}
      >
        Simple Shop System
      </button>
      <div className={"flex items-center gap-[40px]"}>
        <p className="flex cursor-pointer text-[26px] text-white">Login</p>
        <div className={"relative"}>
          <Link href={"/cart"}>
            <p className="cursor-pointer text-[26px] text-white">Cart</p>
          </Link>
          <div
            className={
              "absolute top-0 left-[-15px] flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] bg-black text-[15px] text-white"
            }
          >
            {cart.length}
          </div>
        </div>
        {/* Responsive !!!!!!!!!!!!!!!*/}
        {/* <div className={"hidden gap-[20px] md:flex"}>
          <div className={"relative"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="hidden h-6 w-6 md:flex"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div
              className={
                "absolute top-[-10px] left-[-15px] hidden h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[50%] bg-black text-[14px] text-white md:flex"
              }
            >
              0
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="hidden h-6 w-6 md:flex"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div> */}
        {/* Responsive !!!!!!!!!!!!!!!*/}
      </div>
    </header>
  );
};

export default Header;
