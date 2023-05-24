// import CheckList from "../components/CheckList";

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

      {/* <CheckList /> */}
      <div className="min-h-[100dvh] text-2xl flex flex-col justify-center gap-5">
        <h2 className="text-center text-7xl text-secondary">澳門🇲🇴</h2>
        <div className="space-y-5 text-white text-start">
          <p>
            葡萄牙語：Macau，全稱澳門特別行政區
            ，民間又稱「馬交」，是中國面積最小的一級行政單位；1999年回歸以前則為葡萄牙第二大城巿。澳門位於南海北岸、珠江口西側，北接廣東省珠海市，東面與鄰近的香港相距63公里。
          </p>
          <p>
            澳門自從秦始皇三征嶺南後屬秦朝版圖，從明中葉開始租借予葡萄牙王國，直至1849年葡萄牙停止向清朝交地租並佔領關閘；1887年，澳門成為葡萄牙殖民地。1987年簽署《中葡聯合聲明》，葡萄牙根據聲明於1999年12月20日移交澳門政權予中國。
          </p>
          <p>
            澳門為獨立經濟體，是中華人民共和國管轄範圍內唯一法律允許經營賭場的城市和地區，博彩業及旅遊業為澳門的支柱產業，現時已發展為「世界上第一大賭城」。澳門為世界上人口密度最高的地區，每平方公里人口超過2萬
          </p>
        </div>
      </div>

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
