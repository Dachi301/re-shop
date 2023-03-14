import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PropsTypes {
    title: string;
    price: number;
    imgSrc: string;
    id: number;
}

export default function Card({ title, price, imgSrc, id }: PropsTypes) {
    const router = useRouter();

    return (
        <div
            className={
                "flex w-full flex-col gap-[10px] rounded-[10px] border border-[black] p-[10px]"
            }
        >
            <Image
                src={imgSrc}
                className={"aspect-[3/3] w-full h-full object-cover cursor-pointer"}
                alt="Card Image"
                width={500}
                height={400}
                onClick={() => router.push(`/item/${id}`)}
            ></Image>
            <h1 className={"text-center font-bold text-[18px]"}>{title}</h1>
            <p className={"font text-[18px] font-bold"}>ფასი: {price}₾</p>
            <div className={"flex items-center justify-center"}>
                <Link href={`/item/${id}`}>
                    <button
                        className={
                            "w-[30%] 2xl:w-[45%] flex items-center justify-center font-bold rounded-[20px] bg-[#e7c128] py-[5px] text-[2vh] text-black transition-[0.3s] hover:bg-[#000] hover:text-[#e7c128]"
                        }
                    >
                        View
                    </button>
                </Link>
            </div>
        </div>
    );
}
