import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  baliParagraph,
  luyoutaParagraph,
  meigaoParagraph,
  taipaParagraph,
  weinisiParagraph,
  xinpujinParagraph,
  yongliParagraph,
  zhuhai,
} from "@/descriptions";
import Day2Map from "../components/Day2Map";
import { DayInfo } from "@/type";
import Card from "../components/Card";

const day3MorningData: DayInfo[] = [
  {
    place: "北山大院",
    image:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118192.65161457972!2d113.42850853906246!3d22.220327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017bb07b2752cf%3A0xe9e24cc8d3217166!2z54-g5rW35YyX5bGx!5e0!3m2!1sen!2stw!4v1684984777613!5m2!1sen!2stw",
    description: [
      "北山大院是一個集合了餐廳、咖啡廳、酒吧、藝術展覽、文創商品、農產品、農村體驗等多元化功能的複合式休閒農場。",
      "建議直接在拱北口岸搭乘計程車前往",
    ],
    id: uuidv4(),
  },
  {
    place: "新葡京",
    image:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.267085543812!2d113.54578074862036!3d22.188915526026992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017b95c62ad6cf%3A0x94a5a30b0b592866!2sGrand%20Lisboa!5e0!3m2!1sen!2stw!4v1684721342202!5m2!1sen!2stw",
    description: xinpujinParagraph,
    id: uuidv4(),
  },
  {
    place: "永利",
    image:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.372796977701!2d113.54473181148826!3d22.187934479683157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017ac263b206b3%3A0xf22e7b918434464!2sWynn%20Macau!5e0!3m2!1sen!2stw!4v1684722537520!5m2!1sen!2stw",
    description: yongliParagraph,
    id: uuidv4(),
  },
  {
    place: "美高梅",
    image:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864.413859646263!2d113.54476726112668!3d22.18697575126562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017aea093d21e3%3A0x1f6c444f2f66a489!2sMGM%20Macau!5e0!3m2!1sen!2stw!4v1684723663285!5m2!1sen!2stw",
    description: meigaoParagraph,
    id: uuidv4(),
  },
  {
    place: "旅遊塔",
    image:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.576193199069!2d113.53515631148807!3d22.18019877968878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017a92794a0d9b%3A0x340a59ac83751cb0!2sMacau%20Tower%20Convention%20and%20Entertainment%20Center!5e0!3m2!1sen!2stw!4v1684726954108!5m2!1sen!2stw",
    description: luyoutaParagraph,
    id: uuidv4(),
  },
];

const day3AfternoonData: DayInfo[] = [
  {
    place: "威尼斯人",
    image:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29558.807017013274!2d113.53716789904355!3d22.16974775054177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340170057970b2b7%3A0x53c5014213366eaf!2sThe%20Venetian%20Macao!5e0!3m2!1sen!2stw!4v1684723704632!5m2!1sen!2stw",
    description: weinisiParagraph,
    id: uuidv4(),
  },
  {
    place: "巴黎人",
    image:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.5313952656957!2d113.55948631148715!3d22.143835579715077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3401701c0a4660cb%3A0x3676567ca5ade711!2z5be06buO5Lq6!5e0!3m2!1sen!2stw!4v1684723732686!5m2!1sen!2stw",
    description: baliParagraph,
    id: uuidv4(),
  },
];

const t = [1, 2, 3];
console.log(t.slice(1));

const Day3page = () => {
  return (
    <section className="flex flex-col justify-center px-3 gap-9">
      <div className="min-h-[100dvh] flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">自由行日</h1>
        <div className="text-2xl">
          <p className="text-white/80">
            今天我和紓寧要去找我哥。所以就請阿姨和哥哥自由行一天。
          </p>
        </div>
        <div className="space-y-5 text-2xl">
          <h2 className="text-3xl font-bold">推薦行程：</h2>
          <div className="space-y-2 ">
            <p>
              <span className="text-3xl font-semibold">上午</span>
              到珠海逛逛
              <a className="italic text-secondary" href="#北山大院">
                北山大院。
              </a>
            </p>
            <p>
              <span className="text-3xl font-semibold">中午</span>
              在旅遊塔上吃
              <a className="italic text-secondary" href="#旅遊塔">
                自助餐。
              </a>
            </p>

            <p>
              <span className="text-3xl font-semibold">下午</span>打卡
              <a className="italic text-secondary" href="#新葡京">
                新葡京、
              </a>
              <a className="italic text-secondary" href="#永利">
                永利、
              </a>
              <a className="italic text-secondary" href="#美高梅">
                美高梅、
              </a>
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
      </div>
      <Card
        place={"珠海🇨🇳"}
        image={"/islands/islands-zhuhai.jpeg"}
        description={[zhuhai]}
      />
      {day3MorningData.slice(0, 1).map((data) => (
        <div className="flex flex-col items-center space-y-9" key={data.id}>
          <h2
            id={data.place}
            className="self-start text-5xl font-semibold text-secondary"
          >
            {data.place}
          </h2>
          <div>
            <iframe
              src={data.image}
              width={370}
              height={350}
              loading="lazy"
              className="rounded-md "
            />
          </div>
          <ul className="space-y-5 text-xl">
            {data.description.map((paragraph) => (
              <li className="px-3 text-2xl italic" key={uuidv4()}>
                <span className="not-italic">🇨🇳 </span>
                {paragraph}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {day3MorningData.slice(1).map((data) => (
        <div className="flex flex-col items-center space-y-9" key={data.id}>
          <h2
            id={data.place}
            className="self-start text-5xl font-semibold text-secondary"
          >
            {data.place}
          </h2>
          <div>
            <iframe
              src={data.image}
              width={370}
              height={350}
              loading="lazy"
              className="rounded-md "
            />
          </div>
          <ul className="space-y-5 text-xl">
            {data.description.map((paragraph) => (
              <li className="px-3 text-2xl italic" key={uuidv4()}>
                <span className="not-italic">🎰 </span>
                {paragraph}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Card
        place={"氹仔"}
        image={"/islands/islands-taipa.png"}
        description={taipaParagraph}
      />

      {day3AfternoonData.map((data) => (
        <div className="flex flex-col items-center space-y-9" key={data.id}>
          <h2
            id={data.place}
            className="self-start text-5xl font-semibold text-secondary"
          >
            {data.place}
          </h2>
          <iframe
            src={data.image}
            width={370}
            height={350}
            loading="lazy"
            className="rounded-md "
          />
          <ul className="space-y-5 text-xl">
            {data.description.map((paragraph) => (
              <li className="px-3 text-2xl italic" key={uuidv4()}>
                <span className="not-italic">🎰 </span>
                {paragraph}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
export default Day3page;
