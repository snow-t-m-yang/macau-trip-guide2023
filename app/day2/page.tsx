import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  dasanbaParagraph,
  macauParagraph,
  magemiaoParagraph,
  xinmaluParagraph,
  zhengjiaParagraph,
} from "@/descriptions";
import Day2Map from "../components/Day2Map";
import { DayInfo } from "@/type";
import Card from "../components/Card";

const day2Data: DayInfo[] = [
  {
    place: "大三巴",
    image: "/day2/day2-dasanba.jpeg",
    description: dasanbaParagraph,
    id: uuidv4(),
  },
  {
    place: "新馬路",
    image: "/day2/day2-xinmalu.jpg",
    description: xinmaluParagraph,
    id: uuidv4(),
  },
  {
    place: "鄭家大屋",
    image: "/day2/day2-zhengjia.jpeg",
    description: zhengjiaParagraph,
    id: uuidv4(),
  },
  {
    place: "媽閣廟",
    image: "/day2/day2-mage.jpeg",
    description: magemiaoParagraph,
    id: uuidv4(),
  },
];

const Day2page = () => {
  return (
    <section className="grid w-full px-3 gap-9">
      <div className="min-h-[100dvh] flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">名勝古跡日</h1>
        <Day2Map />
      </div>
      <div className="min-h-[100dvh] text-2xl flex flex-col justify-center gap-5">
        <h2 className="font-semibold text-center text-7xl text-secondary">
          澳門
        </h2>
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
      <Card
        place={"澳門半島"}
        image={"/islands/islands-macau.png"}
        description={macauParagraph}
      />
      {day2Data.map((data) => (
        <div className="space-y-9" key={data.id}>
          <h2
            id={data.place}
            style={{ filter: "drop-shadow(0 0 10px)" }}
            className="text-5xl font-semibold text-secondary"
          >
            {data.place}
          </h2>
          <Image
            src={data.image}
            width={500}
            height={500}
            alt={data.place}
            className="rounded-2xl"
          />
          <div className="space-y-5 text-2xl">
            {data.description.map((paragraph) => (
              <p key={uuidv4()}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Day2page;
