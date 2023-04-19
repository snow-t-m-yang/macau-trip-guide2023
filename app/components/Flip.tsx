"use client";
import { useState } from "react";

const Flip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full h-72 group [perspective:1000px]"
    >
      <div
        className={` ${
          isFlipped ? "group-hover:[transform:rotateY(-180deg)]" : ""
        } relative w-full h-full shadow-xl rounded-xl transition-all duration-500 [transform-style:preserve-3d]  `}
      >
        <div className="absolute inset-0 w-full h-full shadow-xl ">
          <div className="flex flex-col items-center justify-center h-full rounded-xl bg-accent">
            <h2>唔該</h2>
          </div>
        </div>

        <div className="absolute inset-0 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
          <img
            src="https://s3.ap-southeast-1.amazonaws.com/we-xpats.com/uploads/article/zh-tw-308-1.jpg"
            alt="thank you image"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Flip;
