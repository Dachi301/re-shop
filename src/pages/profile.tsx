import Card from "@/components/card";

export default function Profile() {
  return (
    <div className="w-[1500px] my-[0] mx-[auto] mb-[50px] pb-[20px] px-[10px] 3xl:w-full">
      <h1 className="text-[32px] text-center mb-[50px] mt-[20px] lg:text-[26px] font-bold">
        პროფილის დეტალები
      </h1>
      <div className="flex flex-col gap-[10px] ">
        <h1 className="text-[22px] font-bold break-all xl:text-[18px]">
          მოგესალმებით, Dachi123
        </h1>
        <h1 className="text-[22px] font-bold break-all xl:text-[18px]">
          ჩემი საფულე:
          WeqwejqwiejwIJEWIEJWIEjwIjiasdfjiaji83j1i83jeridmkswqerqwtiuituiuyiyh
        </h1>
        <h1 className="text-[22px] font-bold break-all xl:text-[18px]">
          ჩემი ტოკენები: 1 Re;ward
        </h1>

        <h1 className="text-[32px] font-bold break-all text-center mt-[20px] lg:text-[26px]">
          ჩემი შენაძენები:
        </h1>
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[30px] xl:grid-cols-2 lg:grid-cols-1">
          <Card
            title="Nike"
            imgSrc={require("../assets/images/nike.jpg").default.src}
            price={500}
            id={1}
          />
          <Card
            title="Nike"
            imgSrc={require("../assets/images/nike.jpg").default.src}
            price={500}
            id={1}
          />
          <Card
            title="Nike"
            imgSrc={require("../assets/images/nike.jpg").default.src}
            price={500}
            id={1}
          />
          <Card
            title="Nike"
            imgSrc={require("../assets/images/nike.jpg").default.src}
            price={500}
            id={1}
          />
        </div>
      </div>
    </div>
  );
}
