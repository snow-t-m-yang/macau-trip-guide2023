import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { InfoType } from "@/type";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const infoData: InfoType[] = [
  {
    name: "🛫 航班 - 去程",
    description:
      "航班號：NX615 0527 | 時間：20:05 - 22:00 | 地點：台北桃園T1 - 澳門",
    url: "https://www.airportia.com/flights/nx615/taipei/taipa/",
    id: uuidv4(),
  },
  {
    name: "🛬 航班 - 回程",
    description:
      "航班號：NX618 0531 | 時間：17:35 - 19:15 | 地點：澳門 - 台北桃園T1",
    url: "https://www.airportia.com/flights/nx615/taipei/taipa/",
    id: uuidv4(),
  },
  {
    name: "🏨 飯店",
    description: "澳門金龍酒店",
    url: "https://www.google.com/maps/place/Hotel+Golden+Dragon/@22.1953393,113.5544119,17z/data=!4m9!3m8!1s0x34017adc711a5c6f:0xdd83eeee2237167a!5m2!4m1!1i2!8m2!3d22.1953393!4d113.5544119!16s%2Fg%2F155rpnbs",
    id: uuidv4(),
  },
  {
    name: "⛴️ 噴射飛航",
    description: "澳門外港碼頭 - 香港中環碼頭",
    url: "https://www.turbojet.com.hk/tc/routing-sailing-schedule/hong-kong-macau/sailing-schedule-fares.aspx",
    id: uuidv4(),
  },
  {
    name: "🚌 澳門巴士",
    description: "澳門巴士路線",
    url: "https://motransportinfo.com/zh/search",
    id: uuidv4(),
  },
  {
    name: "📞 澳門區號",
    description: "+853",
    url: "https://www.google.com/search?q=%E6%BE%B3%E9%96%80%E5%8D%80%E8%99%9F&sourceid=chrome&ie=UTF-8",
    id: uuidv4(),
  },
];

const Infopage = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen gap-5 px-3 pt-9">
      <h1 className="text-5xl">💁🏻‍♂️ 相關資訊</h1>
      <div>
        {infoData.map((data) => (
          <Accordion key={data.id} type="single" collapsible>
            <AccordionItem value={data.name}>
              <AccordionTrigger className="text-3xl text-secondary">
                {data.name}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                <Link className="text-info" target="blank" href={data.url}>
                  {data.description}
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
export default Infopage;
