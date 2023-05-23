import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {} from "@/descriptions";
import { DayInfo } from "@/type";

const day4Data: DayInfo[] = [
  {
    place: "大三巴",
    image: "/day2/day2-dasanba.jpeg",
    description: [""],
    id: uuidv4(),
  },
];

const Day4page = () => {
  return (
    <section className="flex flex-col justify-center px-3 gap-9">
      <div className="min-h-[100dvh] flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">香港日</h1>
        <div className="text-3xl"></div>
        <div className="relative text-white">
          <a
            className="absolute rounded-md px-1 py-2 left-[155px] top-[10px] bg-accent/80 backdrop-blur-xl"
            href="#大三巴"
          >
            大三巴
          </a>
          <a
            className="absolute rounded-md px-1 py-2 left-[115px] top-[65px] bg-accent/80 backdrop-blur-xl"
            href="#新馬路"
          >
            新馬路
          </a>
          <a
            className="absolute rounded-md px-1 py-2 left-[65px] bottom-[75px] bg-accent/80 backdrop-blur-xl"
            href="#鄭家大屋"
          >
            鄭家大屋
          </a>
          <a
            className="absolute rounded-md px-1 py-2 left-[5px] bottom-[22px] bg-accent/80 backdrop-blur-xl"
            href="#媽閣廟"
          >
            媽閣廟
          </a>

          <Image
            src="/day2/day2-map.png"
            width={500}
            height={500}
            alt="day2-map"
            className="rounded-md"
          ></Image>
        </div>
      </div>
      {day4Data.map((data) => (
        <div className="flex flex-col items-center space-y-9" key={data.id}>
          <h2
            id={data.place}
            className="self-start text-5xl font-semibold text-secondary"
          >
            {data.place}
          </h2>
          <iframe
            src={data.image}
            width={350}
            height={300}
            loading="lazy"
            className="rounded-md "
          />
          <div className="space-y-5 text-xl">
            {data.description.map((paragraph) => (
              <li className="px-3 text-2xl italic" key={uuidv4()}>
                {paragraph}
              </li>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Day4page;
