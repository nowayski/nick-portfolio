import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Carousel(props) {
  const featuredImages = props.images;
  const [currentIndex, setCurrentIndex] = useState(0);
  let count = 0;

  useEffect(() => {
    const handleOnNextClick = () => {
      setCurrentIndex((currentCount) =>
        currentCount === featuredImages.length-1 ? 0 : currentCount + 1
      );
    };

    const interval = setInterval(handleOnNextClick, 4000);

    return () => clearInterval(interval);
  }, [featuredImages.length, setCurrentIndex]);

  return (
    <div className="max-w-screen-xl m-auto grid place-items-center">
      <div className="items-center w-fit select-none md:w-max lg:mx-10">
        <Image
          src={featuredImages[currentIndex]}
          height={300}
          width={300}
          alt="Nick Logo"
          priority={true}
        ></Image>
      </div>
    </div>
  );
}
