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
    url: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hotel%20Drag%C3%A3o%20Dourado+(Macau%20trip)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
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
    name: "🚌 澳門巴士",
    description: "澳門巴士路線",
    url: "https://motransportinfo.com/zh/search",
    id: uuidv4(),
  },
];

const Infopage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen px-3">
      {infoData.map((data) => (
        <Accordion id={data.id} type="single" collapsible>
          <AccordionItem value={data.name}>
            <AccordionTrigger className="text-3xl text-secondary">
              {data.name}
            </AccordionTrigger>
            <AccordionContent className="text-xl">
              <p>{data.description}</p>
              <Link className="text-info" href={data.url}>
                👉 網址
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
export default Infopage;
