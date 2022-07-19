import Carousel from "./Carousel";
import NextSection from "./NextSection";

export default function IntroSection(props) {
  return (
    <div className="w-100 m-auto grid place-items-center">
      <div className="w-100 lg:w-3/4 inset-0 mx-auto my-10 grid grid-rows-2 place-items-center lg:grid-cols-2 lg:grid-rows-1">
        <div className="text-center text-2xl font-bold row-start-2 lg:text-3xl lg:text-left  lg:row-start-1">
          <ul>
            <li className="p-5">Frontend Development. </li>
            <li className="p-5">Web Design and Implementation. </li>
            <li className="p-5">Always open to learning.</li>
            <li className="my-8">
              <button className="text-lg bg-amber-300 w-2/3 lg:w-1/3 p-5 mx-2 my-5 lg:my-10 rounded-full hover:bg-black hover:text-white">
                See my work
              </button>
              <button className="text-lg text-white bg-black w-2/3 lg:w-1/3 m-2 p-5 rounded-full hover:bg-amber-300 hover:text-black">
                Contact Me
              </button>
            </li>
          </ul>
        </div>
        <div className="row-start-1 lg:col-start-2">
          <Carousel />
        </div>
      </div>
      <NextSection text="About Me" pageNumber={1} />
    </div>
  );
}
