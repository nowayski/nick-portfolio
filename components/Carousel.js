import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Carousel() {
    const featuredImages = ['/images/browser.png'];

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
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        <Image
          src={featuredImages[currentIndex]}
          height={300}
          width={300}
          alt="Nicholas playing a board game"
        ></Image>
      </div>
    </div>
  );
}
