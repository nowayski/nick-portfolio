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
    <div className="transition ease-in-out grid grid-cols-1 my-10 place-items-center lg:grid-cols-2">
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
          className="px-2 py-2 text-2xl my-10 font-bold text-white bg-black rounded-full hover:bg-amber-300 hover:text-black"
          onClick={expandHandler}
        >
          Information
        </button>
      </div>
      <div
        className={
          expanded
            ? "transition ease-in-out scale-y-110 duration-500 w-3/4"
            : "transition ease-in-out scale-y-0 duration-500 h-0 w-3/4"
        }
      >
        <div className="list-disc">
          {" "}
          {description?.map((desc, index) => (
            <li
              className="text-left text-md text-lg font-bold text-zinc-600 my-5"
              key={index}
            >
              {desc}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
