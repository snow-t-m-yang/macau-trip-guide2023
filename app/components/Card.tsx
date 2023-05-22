import { CardProps } from "@/type";

const Card = ({ place, image, description }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h2 className="text-7xl text-secondary">{place}</h2>
      <iframe
        src={image}
        width="370"
        height="200"
        loading="lazy"
        className="rounded-xl"
      ></iframe>
      {description.map((paragraph) => (
        <p className="text-2xl">{paragraph}</p>
      ))}
    </div>
  );
};
export default Card;
