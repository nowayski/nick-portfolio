import Carousel from "./Carousel";

export default function IntroSection() {
  return (
    <div className="relative w-3/4 inset-x-0 m-auto lg:my-20 grid grid-rows-2 object:center place-items-center lg:grid-cols-2 lg:grid-rows-1 lg:gap-2">
      <div className="text-center text-2xl font-bold  lg:text-4xl lg:text-left row-start-2 lg:row-start-1">
        <ul>
          <li className="my-5">Frontend Development. </li>
          <li className="my-5">Web Design and Implementation. </li>
          <li className="my-5">Always open to learning.</li>
          <li className="my-8">
            <button className="text-lg bg-amber-300 w-2/3 lg:w-1/3 p-5 m-2 rounded-full hover:bg-black hover:text-white">
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
  );
}
