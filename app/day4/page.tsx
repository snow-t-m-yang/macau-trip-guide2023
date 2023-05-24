import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  hkIslandParagraph,
  hkParagraph,
  kowloonParagraph,
} from "@/descriptions";
import { DayInfo } from "@/type";
import { Suspense } from "react";

const day4HKData: DayInfo[] = [
  {
    place: "九記",
    image: "/day4/day4-jiuji.jpeg",
    description: [
      "於三十年代開業，多年來人氣高企，門外經常排滿等候入座的食客。清湯牛腩的湯底以獨門中藥配方煮成，牛腩肉味香濃，而且炆煮至軟嫩非常，配上掛湯力佳的伊府麵，令人回味。除此之外，極受食客喜愛的咖喱牛腩同樣值得一試。",
    ],
    id: uuidv4(),
  },
  {
    place: "白鬍子",
    image: "/day4/day4-fish.jpeg",
    description: [
      "正如在澳門要試試葡國菜，在香港，怎能不試試作為英國國菜的炸魚薯條呢？",
    ],
    id: uuidv4(),
  },
  {
    place: "大館",
    image: "/day4/day4-daguan.jpeg",
    description: [
      "大館（英語：Tai Kwun），即舊中區警署（前稱中央警署），位於香港中環荷李活道，曾經是香港警察總部及中區警署。中區警署現時已經遷至上環中港道中區警區總部毗連，原址連同前域多利監獄、前中央裁判司署的建築群現在是香港法定古蹟。2018年5月29日起正式對外開放，免費入場參觀。",
    ],
    id: uuidv4(),
  },
  {
    place: "金紫荊廣場",
    image: "/day4/day4-jinzijin.jpeg",
    description: [
      "金紫荊廣場（英語：Golden Bauhinia Square），位於香港灣仔香港會議展覽中心新翼，是博覽海濱花園的一部份，臨近灣仔臨時海濱花園，隔維多利亞港與九龍相望，是香港回歸時，會議展覽中心擴建工程之一部分。",
    ],
    id: uuidv4(),
  },
];
const day4KLData: DayInfo[] = [
  {
    place: "尖沙咀",
    image: "/day4/day4-jianshazui.jpeg",
    description: [
      "尖沙咀（英語：Tsim Sha Tsui），亦作尖沙嘴，原名香埗頭，是香港油尖旺區的一部份，位於九龍半島南端，與香港島隔維多利亞港對望，是娛樂、文藝、旅遊及購物活動為主的地方，亦是香港著名商業中心之一。",
    ],
    id: uuidv4(),
  },
  {
    place: "星光大道",
    image: "/day4/day4-star.jpeg",
    description: [
      "仿傚了美國好萊塢的星光大道，為了表揚香港電影業界的傑出人士而建造的特色景點。",
    ],
    id: uuidv4(),
  },
  {
    place: "油麻地",
    image: "/day4/day4-youmadi.jpeg",
    description: [
      "油麻地（英語：Yau Ma Tei），原名油蔴地，位於香港九龍半島西部，行政上屬於油尖旺區，區內的廣華醫院亦是中華民國第12、13任總統馬英九的出生地",
    ],
    id: uuidv4(),
  },

  {
    place: "波鞋街",
    image: "/day4/day4-sneaker.jpeg",
    description: ["廣東話「波」就是「球」的意思，所以波鞋街就是球鞋街。"],
    id: uuidv4(),
  },
  {
    place: "旺角",
    image: "/day4/day4-wangjiao.jpeg",
    description: [
      "旺角（英語：Mong Kok）是位於香港九龍西部一個已消失的海角，舊稱望角，位於油尖旺區北部，是香港著名的旅遊和購物區之一。旺角新舊樓宇林立；舊住宅樓宇地鋪多為商店或餐廳。以彌敦道為界，購物中心集中在東面，而西面則以傳統民生活動為主。旺角的人口密度極高，平均密度為每平方公里130,000人，現時容積率約4倍，新型摩天大廈、舊式唐樓、繁華街道與排檔縱橫交錯分佈，是世界一大都市景觀。",
    ],
    id: uuidv4(),
  },
  {
    place: "妹記大排檔",
    image: "/day4/day4-meiji.jpeg",
    description: [
      "來香港總要吃一頓大排檔。我問我哥哪一家好吃，他說哪一家都不會差。這家蠻多人推薦的，具體好不好吃，我們也只有試了才知道了。",
    ],
    id: uuidv4(),
  },
];

const Day4page = () => {
  return (
    <section className="flex flex-col justify-center px-3 gap-9">
      <div className="min-h-[100dvh] flex flex-col justify-center gap-5">
        <h1 className="py-2 text-7xl bg-secondary text-primary">香港日</h1>

        <div className="relative text-3xl text-white">
          <a
            className="absolute rounded-md px-1 py-2 left-[155px] top-[130px] bg-accent/80 backdrop-blur-xl"
            href="#九龍"
          >
            九龍
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[120px] bottom-[35px] bg-accent/80 backdrop-blur-xl"
            href="#港島"
          >
            港島
          </a>
          <Suspense fallback={<p>loading</p>}>
            <Image
              src="/day4/day4-all.png"
              width={500}
              height={500}
              alt="day4-all"
              className="rounded-md"
            ></Image>
          </Suspense>
        </div>
        {hkParagraph.map((paragraph) => (
          <p className="text-xl text-white/80" key={uuidv4()}>
            {paragraph}
          </p>
        ))}
      </div>

      <div
        id="港島"
        className="min-h-[100dvh] flex flex-col justify-center gap-5"
      >
        <h1 className="py-2 text-center text-7xl text-secondary">港島</h1>

        <div className="relative text-sm text-white">
          <a
            className="absolute rounded-md px-1 py-2 left-[60px] top-[90px] bg-accent/80 backdrop-blur-xl"
            href="#碼頭"
          >
            中環渡輪碼頭
          </a>
          <a
            className="absolute rounded-md px-1 py-2 left-[10px] bottom-[85px] bg-accent/80 backdrop-blur-xl"
            href="#九記"
          >
            九記
          </a>
          <a
            className="absolute rounded-md px-1 py-2 left-[3px] bottom-[35px] bg-accent/80 backdrop-blur-xl"
            href="#白鬍子"
          >
            白鬍子
          </a>
          <a
            className="absolute rounded-md px-1 py-2 left-[55px] bottom-[45px] bg-accent/80 backdrop-blur-xl"
            href="#大館"
          >
            大館
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[50px] bottom-[75px] bg-accent/80 backdrop-blur-xl"
            href="#金紫荊"
          >
            金紫荊廣場
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[15px] bottom-[40px] bg-accent/80 backdrop-blur-xl"
            href="#灣仔"
          >
            灣仔碼頭
          </a>

          <Image
            src="/day4/day4-hk.png"
            width={500}
            height={500}
            alt="day4-hk"
            className="rounded-md"
          ></Image>
        </div>
        {hkIslandParagraph.map((paragraph) => (
          <p className="text-xl text-white" key={uuidv4()}>
            {paragraph}
          </p>
        ))}
      </div>

      {day4HKData.map((data) => (
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

      <div
        id="九龍"
        className="min-h-[100dvh] flex flex-col justify-center gap-5"
      >
        <h1 className="py-2 text-center text-7xl text-secondary">九龍</h1>

        <div className="relative text-sm text-white">
          <a
            className="absolute rounded-md px-1 py-2 left-[120px] bottom-[20px] bg-accent/80 backdrop-blur-xl"
            href="#尖沙咀"
          >
            尖沙咀
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[70px] bottom-[17px] bg-accent/80 backdrop-blur-xl"
            href="#星光"
          >
            星光大道
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[65px] bottom-[120px] bg-accent/80 backdrop-blur-xl"
            href="#妹記"
          >
            妹記大排檔
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[120px] top-[95px] bg-accent/80 backdrop-blur-xl"
            href="#波鞋街"
          >
            波鞋街
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[140px] top-[50px] bg-accent/80 backdrop-blur-xl"
            href="#旺角"
          >
            旺角
          </a>
          <a
            className="absolute rounded-md px-1 py-2 right-[160px] bottom-[230px] bg-accent/80 backdrop-blur-xl"
            href="#油麻地"
          >
            油麻地
          </a>

          <Image
            src="/day4/day4-kl.png"
            width={500}
            height={500}
            alt="day4-kl"
            className="rounded-md"
          ></Image>
        </div>
        {kowloonParagraph.map((paragraph) => (
          <p className="text-xl text-white" key={uuidv4()}>
            {paragraph}
          </p>
        ))}
      </div>

      {day4KLData.map((data) => (
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
export default Day4page;
