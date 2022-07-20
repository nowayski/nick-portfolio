import Image from "next/image";
import Carousel from "./Carousel";
import Link from "next/link";

export default function ProjectItem(props) {
  const images = props.imageList;
  return (
      <div className="grid grid-cols-1 my-20 place-items-center lg:grid-cols-2">
        <Link href={props.linkURL}>
          <a>
            <h1 className="my-10 text-zinc-600 text-center text-3xl font-bold  lg:text-4xl hover:text-amber-300">
              {props.title}
            </h1>
          </a>
        </Link>
        <Carousel images={images} />
      </div>
  );
}
