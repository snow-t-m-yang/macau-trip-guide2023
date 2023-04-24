import Image from "next/image";

const Day2page = () => {
  return (
    <section className="grid w-full  px-3 py-3 gap-5 min-h-[100dvh] ">
      <h1>Day 2</h1>

      <div className="space-y-3">
        <h2 className="text-3xl ">新馬路</h2>

        <Image
          src="/day2/day2-xinmalu.jpg"
          width={500}
          height={500}
          alt="新馬路"
          className="rounded-2xl"
        />
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
export default Day2page;
