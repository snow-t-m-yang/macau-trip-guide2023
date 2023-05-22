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
    <section className="grid w-full gap-9">
      <div className="min-h-[100dvh] flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">香港日</h1>
        <div className="text-3xl">
          <p className="text-white/80">
            今天我和紓寧要去找我哥。所以就請阿姨和哥哥自由行一天。
          </p>
        </div>
        <div className="space-y-5 text-3xl">
          <h2 className="text-4xl font-bold">推薦行程：</h2>
          <p>
            <span className="text-4xl font-semibold">上午</span>逛逛
            <a className="italic text-secondary" href="#新葡京">
              新葡京、
            </a>
            <a className="italic text-secondary" href="#永利">
              永利、
            </a>
            <a className="italic text-secondary" href="#美高梅">
              美高梅。
            </a>
          </p>
          <p>
            <span className="text-4xl font-semibold">中午</span>在旅遊塔上吃
            <a className="italic text-secondary" href="#旅遊塔">
              自助餐。
            </a>
          </p>
          <p>
            <span className="text-4xl font-semibold">下午</span>去路氹金光大道
            <a className="italic text-secondary" href="#威尼斯人">
              威尼斯人、
            </a>
            <a className="italic text-secondary" href="#巴黎人">
              巴黎人
            </a>
            等世界頂級賭場。
          </p>
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
            width={450}
            height={500}
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
