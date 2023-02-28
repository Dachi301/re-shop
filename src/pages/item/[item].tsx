export default function ItemPage() {
  return (
    <div>
      <div className={"px-[30px] mt-[50px]"}>
        <div className={"flex gap-[50px]"}>
          <img
            src={require("../../assets/images/ps5.jpg").default.src}
            className={"h-[500px] object-cover"}
          />
          <div className={"flex flex-col"}>
            <h1 className={"text-[7em]"}>Nike</h1>
            <div className={"pl-[10px]"}>
              <p className={"mb-[20px] text-[22px]"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo unde expedita in quibusdam? Iste at saepe officia
                tempora facilis, fugit dolorum modi repellendus impedit culpa
                eius! A nemo blanditiis ea.
              </p>
              <div className={"flex flex-col gap-[15px]"}>
                <p className={"text-[22px]"}>1149 ₾</p>
                <div className={"flex items-center gap-[20px]"}>
                  <button
                    className={
                      "rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px]"
                    }
                  >
                    +
                  </button>
                  <p>1</p>
                  <button
                    className={
                      "rounded-[10px] bg-[gray] py-[10px] px-[20px] text-[25px]"
                    }
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    className={
                      "mt-[20px] flex translate-y-0 justify-start rounded-[10px] bg-[#e7c128] py-[20px] px-[20px] text-[20px] transition-all active:translate-y-1"
                    }
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
