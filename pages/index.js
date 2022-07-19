import Head from "next/head";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import Image from "next/image";
import Carousel from "../components/Carousel";
import NextSection from "../components/NextSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicholas Lane</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="h-max lg:h-screen">
        <Header />
        <IntroSection />
      </section>

      <hr className="block divide-solid outline-8 m-8"></hr>

      <section
        id="aboutme"
        className=" relative lg:h-screen w-5/6 mx-auto mb-20 flex items-center"
      >
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:place-items-center lg:object-center lg:gap-5">
          <div>
            <Carousel />
          </div>
          <div>
            <h1 className="my-5 text-left text-2xl font-bold  lg:text-4xl">
              My name is Nick and I'm a British software developer.
            </h1>
            <p className="text-left text-md text-lg font-bold text-zinc-600 my-5">
              Since I started learning web development, I've been through so
              many steps to find the things I like. It turns out, those things
              are creating functional, responsive web pages and trying to create
              good looking designs to go along with it.
            </p>
            <br />
            <p className="text-lg font-bold text-center lg:text-left">
              My passions are:{" "}
            </p>
            <br></br>
            <div className="grid grid-rows-3 grid-cols-1 place-content-center text-center lg:grid-rows-1 lg:grid-cols-3 ">
              <div>
                <p className="p-2 text-lg font-bold">Gaming</p>
                <Image
                  src="/images/gaming.png"
                  width={100}
                  height={100}
                  alt="gaming pc"
                ></Image>{" "}
              </div>
              <div>
                <p className="p-2 text-lg font-bold">Korean language</p>
                <Image
                  src="/images/korean.png"
                  width={100}
                  height={100}
                  alt="hangul text"
                ></Image>{" "}
              </div>
              <div>
                <p className="p-2 text-lg font-bold">Good food</p>
                <Image
                  src="/images/eco-food.png"
                  width={100}
                  height={100}
                  alt="bowl of food"
                ></Image>
              </div>
            </div>

            <br />
            <p className="pt-5 text-lg font-bold">
              Now that I am older, I am looking for opportunities closer to
              home..
            </p>
          </div>
          <NextSection text="My Qualifications and Skills" pageNumber={2} />
        </div>
      </section>

      <hr className="divide-solid outline-8"></hr>

      <section id="skills" className="lg:h-screen mt-10 w-3/4 mx-auto">
        <h1 className="text-center text-left text-2xl font-bold lg:text-4xl mb-20">
          I specialise in frontend web development.
        </h1>
        <div className="bg-zinc-100 mb-20">
          <div className="flex flex-wrap place-items-center text-center lg:grid lg:gap-5 lg:grid-cols-5 lg:grid-rows-1 mb-5">
            <div className="w-1/2">
              <p className="p-3 text-lg font-bold">HTML</p>
              <Image
                src="/images/html.png"
                width={100}
                height={100}
                alt="HTML Symbol"
              ></Image>
            </div>
            <div className="w-1/2">
              <p className="p-3 text-lg font-bold">CSS</p>{" "}
              <Image
                src="/images/css.png"
                width={100}
                height={100}
                alt="HTML Symbol"
              ></Image>
            </div>
            <div className="w-1/2">
              <p className="p-3 text-lg font-bold">Javascript (ES6)</p>{" "}
              <Image
                src="/images/javascript.png"
                width={100}
                height={100}
                alt="HTML Symbol"
              ></Image>
            </div>
            <div className="w-1/2">
              <p className="p-3 text-lg font-bold">React</p>{" "}
              <Image
                src="/images/react.png"
                width={100}
                height={100}
                alt="HTML Symbol"
              ></Image>
            </div>
            <div className="w-full">
              <p className="p-3 text-lg font-bold">Next.js</p>
              <Image
                src="/images/nextjs.png"
                width={100}
                height={100}
                alt="HTML Symbol"
              ></Image>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-left text-2xl font-bold lg:text-4xl">
            I also have other experience.
          </h1>
        </div>
      </section>

      {/* <div className="h-32 w-32">
        <footer className="absolute inset-x-0 bottom-0 h-16">
          <div className="text-gray-700 text-center p-4 bg-gray-300">
            Nicholas Lane - 2022
            Hobby Icons <a href="https://www.flaticon.com/free-icons/korean" title="korean icons">by Freepik - Flaticon</a>
            Skill Icons by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>

                                
          </div>
        </footer>
      </div> */}
    </div>
  );
}
