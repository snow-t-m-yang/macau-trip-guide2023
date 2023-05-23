import CheckList from "../components/CheckList";

const page = () => {
  return (
    <section className="flex px-3 text-center text-secondary flex-col items-center justify-center w-full gap-10 min-h-[100dvh] ">
      <div className="min-h-[100dvh] text-start flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">啟程日</h1>
        <div className="text-3xl">
          <p className="text-white" style={{ filter: "drop-shadow(0 0 10px)" }}>
            希望各位能有一趟輕鬆之餘具有啟發性的旅程。
          </p>
        </div>
      </div>
      <CheckList />
      <div className="w-full space-y-3">
        <h2 className="text-5xl">航班資訊</h2>
        <iframe
          className="w-full bg-white rounded-2xl h-72"
          src="https://www.airportia.com/flights/nx615/taipei/taipa/"
        ></iframe>
      </div>

      {/* Hotel */}
      <div className="w-full space-y-3">
        <div>
          <h2 className="text-5xl">飯店資訊</h2>
          <p>聯絡電話：+853 2836 1999</p>
        </div>

        <div>
          <iframe
            className="z-0 w-full h-56 rounded-2xl"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hotel%20Drag%C3%A3o%20Dourado+(Macau%20trip)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default page;
