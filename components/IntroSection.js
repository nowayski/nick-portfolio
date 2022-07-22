import Carousel from "./Carousel";
import NextSection from "./NextSection";
import Image from "next/image";
import Link from "next/link";

export default function IntroSection(props) {
  const images = ["/images/nick_logo2_circle.png"];
  return (
    <div className="w-100 m-auto grid place-items-center bottom-0">
      <div className="w-100 lg:w-3/4 inset-0 mx-auto my-10 grid grid-rows-2 place-items-center lg:grid-cols-2 lg:grid-rows-1">
        <div className="text-center text-2xl font-bold row-start-2 lg:text-3xl lg:text-left  lg:row-start-1">
          <ul>
            <li className="p-5">Frontend Development. </li>
            <li className="p-5">Web Design and Implementation. </li>
            <li className="p-5">Always open to learning.</li>
            <li className="my-8">
              <Link href="/projects">
                <button className="text-lg bg-amber-300 w-2/3 lg:w-1/3 p-5 mx-2 my-5 lg:my-10 rounded-full hover:bg-black hover:text-white">
                  See my work
                </button>
              </Link>
              <Link href="/contactme">
                <button className="text-lg text-white bg-black w-2/3 lg:w-1/3 m-2 p-5 rounded-full hover:bg-amber-300 hover:text-black">
                  Contact Me
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row-start-1 lg:col-start-2">
          <div className="max-w-screen-xl m-auto grid place-items-center">
            <div className="items-center w-fit select-none md:w-max lg:mx-10">
              <Image
                src="/images/nick_logo2_circle.png"
                height={400}
                width={400}
                alt="Nick Logo"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
