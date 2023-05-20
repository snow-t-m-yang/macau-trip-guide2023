import { DayInfo } from "../day3/page";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

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

      <div>
        <h2>航班資訊</h2>
        <iframe
          className="w-full rounded-2xl"
          src="https://www.airportia.com/flights/nx618/taipa/taipei/"
        ></iframe>
      </div>
    </section>
  );
};
export default Day5page;
