import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { DayInfo } from "@/type";
import { andrewParagraph, luhuanParagraph } from "@/descriptions";
import Card from "../components/Card";

const Day5page = () => {
  const day5Data: DayInfo[] = [
    {
      place: "安德魯",
      image: "/day5/day5-andrew.jpeg",
      id: uuidv4(),
      description: andrewParagraph,
    },
  ];
  return (
    <section className="flex flex-col w-full px-3 gap-7">
      <div className="min-h-[100dvh] flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">回程日</h1>
        <div className="text-3xl">
          <p className="text-white/80">
            今天很Child。早上可以先去機場寄放行李，然後到我的小學附近逛逛，中午去吃個葡撻，下午回臺。
          </p>
        </div>
      </div>
      <div className="w-full space-y-5 bg-white text-secondary">
        <h2 className="text-5xl">航班資訊</h2>
        <iframe
          className="w-full rounded-2xl h-72"
          src="https://www.airportia.com/flights/nx618/taipa/taipei/"
        ></iframe>
      </div>
      <Card
        place={"路環"}
        image={"/islands/islands-luhuan.png"}
        description={luhuanParagraph}
      />

      {day5Data.map((data) => (
        <div className="px-3 space-y-9" key={data.id}>
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
export default Day5page;
