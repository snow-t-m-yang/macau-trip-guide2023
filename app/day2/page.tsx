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
      <Card
        place={"澳門半島"}
        image={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29552.50220382385!2d113.52574639909098!3d22.19972049915123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017ae0d942c9b9%3A0xbb6f4936e7bdf929!2sMacau%20Island!5e0!3m2!1sen!2stw!4v1684742301618!5m2!1sen!2stw"
        }
        description={macauParagraph}
      />
      {day2Data.map((data) => (
        <div className="space-y-9" key={data.id}>
          <h2 id={data.place} className="text-5xl font-semibold text-secondary">
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
