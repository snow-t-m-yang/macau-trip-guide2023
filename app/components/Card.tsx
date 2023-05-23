import Image from "next/image";
import { CardProps } from "@/type";

const Card = ({ place, image, description }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h2 className="text-7xl text-secondary">{place}</h2>

      <Image
        src={image}
        width="370"
        height="200"
        loading="lazy"
        alt={place}
        className="rounded-xl"
      ></Image>

      {description.map((paragraph) => (
        <p className="text-2xl">{paragraph}</p>
      ))}
    </div>
  );
};
export default Card;
