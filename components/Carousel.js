import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Carousel() {
  const featuredImages = ["/images/nickprofile2.png"];

  const [currentIndex, setCurrentIndex] = useState(0);
  let count = 0;
  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  return (
    <div className="max-w-screen-xl m-auto grid place-items-center">
      <div className="items-center w-fit select-none md:w-max lg:mx-10">
        <Image
          src={featuredImages[currentIndex]}
          height={350}
          width={350}
          alt="Nicholas playing a board game"
        ></Image>
      </div>
    </div>
  );
}
