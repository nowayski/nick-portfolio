import Image from "next/image";
import Carousel from "./Carousel";
import Link from "next/link";
import React, { useState } from "react";

export default function ProjectItem(props) {
  const images = props.imageList;
  const description = props.description;
  const [expanded, setExpanded] = useState(false);

  function expandHandler(event) {
    setExpanded(!expanded);
  }
  return (
    <div className="grid grid-cols-1 w-3/4 my-10 place-items-center m-auto bg-slate-100 shadow-xl rounded-lg">
      <div>
        <Link href={props.linkURL}>
          <a>
            <h1 className="my-10 text-sky-600 text-center text-3xl font-bold  lg:text-4xl hover:text-amber-300 underline">
              {props.title}
            </h1>
          </a>
        </Link>
      </div>
      <div>
        <Carousel images={images} />
      </div>
      <div>
        <button
          className="px-3 py-3 text-2xl my-10 font-bold text-white bg-black rounded-full hover:bg-amber-300 hover:text-black"
          onClick={expandHandler}
        >
          Information
        </button>
      </div>
      <div className={expanded ? "w-3/4 h-full" : "h-0 w-3/4"}>
        <div className="list-disc">
          {" "}
          {expanded ? (
            description?.map((desc, index) => (
              <p
                className="text-left text-md text-md font-bold text-zinc-800 my-5"
                key={index}
              >
                {desc}
              </p>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
