"use client";
import { useState } from "react";

type FlipSlidersProps = {
  mandarin: string;
  alt: string;
  cantonese: string;
  example: string;
  exampleTranslate: string;
  level: number;
};

const FlipSlidersSource: FlipSlidersProps[] = [
  {
    mandarin: "豬排包",
    alt: "Pork Chop Bun",
    cantonese: "豬扒包",
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 1,
  },
  {
    mandarin: "謝謝/不好意思",
    alt: "thank you image",
    cantonese: "唔該",
    example: "凍檸茶走糖啊唔該",
    exampleTranslate: "不好意思（請給我一杯）去糖的冰檸檬紅茶",
    level: 2,
  },
  {
    mandarin: "火鍋",
    alt: "hot pot image",
    cantonese: "打邊爐",
    example: "今晚食打邊爐好唔好？",
    exampleTranslate: "今晚吃火鍋好嗎？",
    level: 3,
  },
  {
    mandarin: "他/她/牠/它",
    alt: "he",
    cantonese: "佢",
    example: "佢呃人㗎",
    exampleTranslate: "他騙人的",
    level: 4,
  },
  {
    mandarin: "是",
    alt: "Is",
    cantonese: "係",
    example: "你係唔係講緊大話？",
    exampleTranslate: "你是不是在說謊？",
    level: 5,
  },
  {
    mandarin: "什麼",
    alt: "What",
    cantonese: "乜",
    example: "做咩姐",
    exampleTranslate: "幹嘛啦",
    level: 6,
  },
  {
    mandarin: "東西",
    alt: "Thing",
    cantonese: "嘢",
    example: "想飲咩即管嗌",
    exampleTranslate: "想喝什麼盡量點",
    level: 7,
  },
  {
    mandarin: "沒",
    alt: "Nothing",
    cantonese: "冇",
    example: "你冇事呀嘛？",
    exampleTranslate: "你沒事吧？",
    level: 8,
  },
  {
    mandarin: "來",
    alt: "Come",
    cantonese: "嚟",
    example: "出咗事，唔好嚟搵我！",
    exampleTranslate: "出了事，別來找我！",
    level: 9,
  },
  {
    mandarin: "生氣",
    alt: "Angry",
    cantonese: "嬲",
    example: "講起我就嬲！",
    exampleTranslate: "一說我就生氣！",
    level: 10,
  },
];

const FlipSliders = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full carousel rounded-box">
      {FlipSlidersSource.map((slider) => {
        return (
          <div
            key={slider.alt}
            className="w-full carousel-item"
            id={slider.cantonese}
          >
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full h-72 group [perspective:1000px]"
            >
              <div
                className={` ${
                  isFlipped ? "group-hover:[transform:rotateY(-180deg)]" : ""
                } relative w-full h-full  rounded-xl transition-all duration-500 [transform-style:preserve-3d] `}
              >
                <div className="absolute inset-0  w-full h-full  [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center h-full bg-accent text-secondary ">
                    <p
                      style={{ filter: "drop-shadow(0 0 10px)" }}
                      className="text-xl font-semibold"
                    >
                      Level: {slider.level}
                    </p>
                    <h2 className="text-7xl">{slider.cantonese}</h2>
                  </div>
                </div>

                <div className="absolute inset-0 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center h-full gap-5 px-5 text-white bg-accent ">
                    <h2 className="text-5xl">{slider.mandarin}</h2>
                    <div className="text-2xl leading-loose">
                      <p className="text-secondary">{slider.example}</p>
                      <p className="leading-none ">{slider.exampleTranslate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FlipSliders;
