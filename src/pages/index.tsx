import { useEffect, useState } from "react";
import Card from "@/components/card";
import Items from "@/data/items";
import Head from "next/head";
import ItemService from "@/services/itemService";
import PractisePage from "@/components/practisePage";
// import PhantomButton from "@/components/phantomButton";

export default function Home() {
    const [searchValue, setSearchValue] = useState("");

    const filterProducts = () => {
        if (searchValue && Items.length !== 0) {
            let products = Items.filter(items =>
                items.title.toLowerCase().includes(searchValue.trim().toLowerCase())
            );
            return products;
        }
        return Items;
    };

    const getItems = async () => {
        await ItemService.getItems();
    };

    useEffect(() => {
        getItems();
    }, []);

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
                            "h-[60px] w-[700px] rounded-[10px] border-2 border-[#e7c128] pl-[20px] pr-[50px] text-[20px] outline-0 xl:w-[93vw] lg:w-[87vw]"
                        }
                        placeholder="..."
                        onInput={e => setSearchValue(e.currentTarget.value)}
                    />
                </div>
                {/* <div
          className={
            "grid w-full grid-cols-4 gap-x-[30px] gap-y-[30px] px-[30px] mb-[50px] 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1"
          }
        >
          {filterProducts().length === 0 ? (
            <h1 className="text-[red] text-[28px]">There is no products!</h1>
          ) : (
            filterProducts().map((product) => (
              <Card
                key={product.id}
                title={product?.title}
                price={product?.price}
                imgSrc={product?.imgSrc}
                id={product?.id}
              />
            ))
          )}
        </div> */}
                <PractisePage />
            </main>
        </>
    );
}
