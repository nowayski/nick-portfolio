import Image from "next/image";
import React, { useRef } from "react";

export default function NextSection(props) {
  function goToHandler() {
    props.scrollRef.current.scrollIntoView({ behavior: "smooth" });
    // const height = window.innerHeight * props.pageNumber + 150;
    // window.scrollTo({ top: height, left: 0, behavior: "smooth" });
  }

  return (
    <div className="invisible inset-x-0 bottom-0 lg:visible text-center  animate-bounce">
      <button>
        <a onClick={goToHandler} className="text-2xl">
          {props.text}
          <br></br>
          <Image
            src="/images/downarrow.png"
            width={50}
            height={50}
            alt="down arrow"
          ></Image>
        </a>
      </button>
    </div>
  );
}
