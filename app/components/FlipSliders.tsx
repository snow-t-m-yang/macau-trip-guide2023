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
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 2,
  },
  {
    mandarin: "火鍋",
    alt: "hot pot image",
    cantonese: "打邊爐",
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 3,
  },
  {
    mandarin: "他/她/牠/它",
    alt: "he",
    cantonese: "佢",
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 4,
  },
  {
    mandarin: "是",
    alt: "hot pot image",
    cantonese: "係",
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 5,
  },
  {
    mandarin: "什麼",
    alt: "What",
    cantonese: "乜",
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 6,
  },
  {
    mandarin: "東西",
    alt: "What",
    cantonese: "嘢",
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 7,
  },
  {
    mandarin: "什麼",
    alt: "What",
    cantonese: "咩",
    example: "食番個豬扒包先",
    exampleTranslate: "先吃個豬排包",
    level: 7,
  },
];

const FlipSliders = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full carousel rounded-box">
      {FlipSlidersSource.map((slider) => {
        return (
          <div className="w-full carousel-item" id={slider.cantonese}>
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full h-72 group [perspective:1000px]"
            >
              <div
                className={` ${
                  isFlipped ? "group-hover:[transform:rotateY(-180deg)]" : ""
                } relative w-full h-full shadow-xl rounded-xl transition-all duration-500 [transform-style:preserve-3d]`}
              >
                <div className="absolute inset-0 w-full h-full shadow-xl [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center h-full text-secondary rounded-xl bg-accent">
                    <p className="text-xl">Level: {slider.level}</p>
                    <h2 className="text-4xl">{slider.cantonese}</h2>
                  </div>
                </div>

                <div className="absolute inset-0 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center h-full gap-5 text-4xl text-white rounded-xl bg-accent">
                    <h2>{slider.mandarin}</h2>
                    <div className="text-2xl">
                      <p className="text-secondary">{slider.example}</p>
                      <p>{slider.exampleTranslate}</p>
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
