import CheckList from "../components/CheckList";

const page = () => {
  return (
    <section className="grid w-full text-center px-3 py-3 gap-5 min-h-[100dvh] ">
      <CheckList />
      <div className="space-y-3">
        <h2 className="text-3xl ">航班資訊</h2>
        <iframe
          className="w-full h-56 rounded-2xl"
          src="https://www.airportia.com/flights/nx615/taipei/taipa/"
        ></iframe>
      </div>

      {/* Hotel */}
      <div>
        <h2 className="text-3xl">飯店資訊</h2>
        <p>聯絡電話：+853 2836 1999</p>

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
