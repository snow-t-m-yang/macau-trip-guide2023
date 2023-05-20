const Infopage = () => {
  return (
    <div>
      <div
        id="air"
        className="min-h-[50dvh]  flex flex-col  items-center gap-2"
      >
        <h1 className="p-3 text-2xl text-secondary">航班資訊</h1>
        <div className=" grid grid-cols-2     h-[20dvh] w-[90%]   rounded-3xl bg-white/20">
          <h2 className=" flex items-start w-[50%] justify-self-center col-start-1 col-end-2 row-start-1 row-end-2 text-secondary  pt-3 text-lg ">
            去程：{" "}
          </h2>
          <p className=" col-start-1 col-end-2 row-start-2 row-end-3 justify-self-center  flex items-start w-[50%]">
            航班號
          </p>
          <p className="col-start-2 col-end-3 row-start-2 row-end-3 px-3 justify-self-start">
            NX615 0527
          </p>
          <p className=" col-start-1 col-end-2 row-start-3 row-end-4 justify-self-center  flex items-start w-[50%]">
            時間
          </p>
          <p className="col-start-2 col-end-3 row-start-3 row-end-4 px-3 justify-self-start">
            20:05 - 22:00
          </p>
          <p className=" col-start-1 col-end-2 row-start-4 row-end-5 justify-self-center  flex items-start w-[50%]">
            地點
          </p>
          <p className="col-start-2 col-end-3 row-start-4 row-end-5 px-3 justify-self-start">
            {" "}
            台北桃園T1 - 澳門
          </p>
        </div>
        <div className=" grid grid-cols-2 justify-center h-[20dvh] w-[90%]   rounded-3xl bg-white/20">
          <h2 className=" justify-self-center text-lg col-start-1 col-end-2 row-start-1 row-end-2 text-secondary pt-3  w-[50%] items-start ">
            回程：{" "}
          </h2>
          <p className=" col-start-1 col-end-2 row-start-2 row-end-3 justify-self-center flex items-start w-[50%] ">
            航班號
          </p>
          <p className="col-start-2 col-end-3 row-start-2 row-end-3 px-3 justify-self-start">
            NX618 0531
          </p>
          <p className=" col-start-1 col-end-2 row-start-3 row-end-4 flex items-start justify-self-center w-[50%]">
            時間
          </p>
          <p className="col-start-2 col-end-3 row-start-3 row-end-4 px-3 justify-self-start">
            17:35 - 19:15
          </p>
          <p className=" col-start-1 col-end-2 row-start-4 row-end-5 flex items-start justify-self-center w-[50%]">
            地點
          </p>
          <p className="col-start-2 col-end-3 row-start-4 row-end-5 px-3 justify-self-start">
            {" "}
            澳門 - 台北桃園T1
          </p>
        </div>
      </div>
      <div id="hotel" className="border border-red-600 min-h-[50dvh]">
        <h1>飯店資訊</h1>
        <p>去程： NX615 0527 台北桃園T1 - 澳門 20:05 - 22:00</p>
        <p>回程： NX618 0531 澳門 - 台北桃園T1 17:35 - 19:15</p>
      </div>
      <div id="contact" className="border border-red-600 min-h-[50dvh]">
        <h1>聯絡資訊</h1>
        <p>去程： NX615 0527 台北桃園T1 - 澳門 20:05 - 22:00</p>
        <p>回程： NX618 0531 澳門 - 台北桃園T1 17:35 - 19:15</p>
      </div>
    </div>
  );
};
export default Infopage;
