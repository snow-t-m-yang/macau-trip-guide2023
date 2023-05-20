import Image from "next/image";

const Day2Map = () => {
  return (
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
        className=""
        src="/day2/day2-map.png"
        width={500}
        height={500}
        alt="day2-map"
      ></Image>
    </div>
  );
};
export default Day2Map;
