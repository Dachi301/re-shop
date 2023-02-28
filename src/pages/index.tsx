import Card from "@/components/card";
import Items from "@/data/items";

import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={"relative mb-[50px] mt-[50px] flex justify-center items-center bg"}>
                    <input
                        type={"text"}
                        className={
                            "h-[60px] w-[700px] rounded-[10px] border-2 border-[#e7c128] pl-[20px] pr-[50px] text-[20px] outline-0"
                        }
                        placeholder="..."
                    />
                </div>
                <div
                    className={
                        "grid w-full grid-cols-4 gap-x-[30px] gap-y-[30px] px-[30px] mb-[50px]"
                    }
                >
                    {Array.isArray(Items) &&
                        Items.map((item: any, id: any) => (
                            <Card
                                title={item.title}
                                price={item.price}
                                imgSrc={item.imgSrc}
                                key={id}
                                id={item.id}
                            />
                        ))}
                </div>
            </main>
        </>
    );
}
