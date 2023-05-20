import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  dasanbaParagraph,
  magemiaoParagraph,
  xinmaluParagraph,
} from "../day2/descriptions";
import Dat1Map from "../components/Day1Map";

type Day2 = {
  place: string;
  image: string;
  description: string[];
  id: string;
};

const day2Data: Day2[] = [
  {
    place: "新馬路",
    image: "/day2/day2-xinmalu.jpg",
    description: xinmaluParagraph,
    id: uuidv4(),
  },
  {
    place: "大三巴",
    image: "/day2/day2-dasanba.jpeg",
    description: dasanbaParagraph,
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
    <section className="grid w-full px-3 py-3 gap-5 min-h-[100dvh] ">
      <h1>Day 2</h1>
      <Dat1Map />
      {day2Data.map((data) => (
        <div className="space-y-5" key={data.id}>
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
