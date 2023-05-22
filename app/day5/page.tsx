import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { DayInfo } from "@/type";

const Day5page = () => {
  const day5Data: DayInfo[] = [
    {
      place: "安德烈葡撻",
      image: "/day2/day2-dasanba.jpeg",
      id: uuidv4(),
      description: [""],
    },
    {
      place: "新馬路",
      image: "/day2/day2-xinmalu.jpg",
      id: uuidv4(),
      description: [""],
    },
  ];
  return (
    <section className="w-full px-3 min-h-[100dvh] ">
      <div className="min-h-[100dvh] flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">回程日</h1>
        <div className="text-3xl">
          <p className="text-white/80">
            今天很Child，早上可以先去我小學附近逛逛，中午去吃個葡撻，下午回臺。
          </p>
        </div>
      </div>
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
          <div className="space-y-5 text-xl">
            {data.description.map((paragraph) => (
              <p key={uuidv4()}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}

      <div className="w-full space-y-3 text-secondary">
        <h2 className="text-5xl">航班資訊</h2>
        <iframe
          className="w-full rounded-2xl h-72"
          src="https://www.airportia.com/flights/nx618/taipa/taipei/"
        ></iframe>
      </div>
    </section>
  );
};
export default Day5page;
