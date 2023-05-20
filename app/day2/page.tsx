import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  dasanbaParagraph,
  magemiaoParagraph,
  xinmaluParagraph,
  zhengjiaParagraph,
} from "../day2/descriptions";
import Day2Map from "../components/Day2Map";

type Day2 = {
  place: string;
  image: string;
  description: string[];
  id: string;
};

const day2Data: Day2[] = [
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
    place: "媽閣廟",
    image: "/day2/day2-mage.jpeg",
    description: magemiaoParagraph,
    id: uuidv4(),
  },
  {
    place: "鄭家大屋",
    image: "/day2/day2-zhengjia.jpeg",
    description: zhengjiaParagraph,
    id: uuidv4(),
  },
];

const Day2page = () => {
  return (
    <section className="grid w-full gap-9">
      <Day2Map />
      {day2Data.map((data) => (
        <div className="px-3 space-y-9" key={data.id}>
          <h2 id={data.place} className="text-5xl text-secondary">
            {data.place}
          </h2>
          <Image
            src={data.image}
            width={500}
            height={500}
            alt={data.place}
            className="rounded-2xl"
          />
          <div className="space-y-5 text-xl">
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
