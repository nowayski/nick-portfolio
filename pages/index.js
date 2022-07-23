import Head from "next/head";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import Image from "next/image";
import NextSection from "../components/NextSection";
import ImageListItem from "../components/ImageListItem";
import Link from "next/link";
import Footer from "../components/Footer";
import React, { useRef } from "react";

export default function Home() {
  const skillRef = useRef(null);
  const aboutMeRef = useRef(null);
  const socialRef = useRef(null);
  const startRef = useRef(null);

  function backToTopHandler() {
    startRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Head>
        <title>Nicholas Lane</title>
        <meta
          name="Nicholas Lane Portfolio"
          content="Nicholas Lane Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section ref={startRef} className=" lg:h-full">
        <Header />
        <IntroSection />
      </section>
      <NextSection text="About Me" scrollRef={aboutMeRef} />

      <hr ref={aboutMeRef} className="block divide-solid outline-8 lg:m-8"></hr>

      <section
        id="aboutme"
        className=" relative w-5/6 mx-auto lg:mb-20 flex items-center"
      >
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:place-items-center lg:object-center lg:gap-5 lg:my-10">
          <div>
            <Image
              src="/images/nick_logo2_circle.png"
              height={400}
              width={400}
              alt="Nicholas playing a board game"
              priority={true}
            ></Image>
          </div>
          <div>
            <h1 className="my-5 text-left text-2xl font-bold  lg:text-4xl lg:my-10">
              My name is Nick and I am a UK based software developer.
            </h1>
            <p className="text-left text-md text-lg font-bold text-zinc-600 my-5 lg:text-xl lg:my-10 lg:py-5">
              I use my Web Development skills to create good looking, functional
              and responsive web pages.
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
                  priority={true}
                ></Image>{" "}
              </div>
              <div>
                <p className="p-2 text-lg font-bold">Korean language</p>
                <Image
                  src="/images/korean.png"
                  width={100}
                  height={100}
                  alt="hangul text"
                  priority={true}
                ></Image>{" "}
              </div>
              <div>
                <p className="p-2 text-lg font-bold">Good food</p>
                <Image
                  src="/images/eco-food.png"
                  width={100}
                  height={100}
                  alt="bowl of food"
                  priority={true}
                ></Image>
              </div>
            </div>

            <br />
            <p className="pt-5 lg:my-10 text-lg font-bold">
              But most importantly, I am easy to work with and care about building high quality websites.
            </p>
          </div>
        </div>
      </section>

      <NextSection text="My Qualifications and Skills" scrollRef={skillRef} />
      <hr className="divide-solid outline-8" ref={skillRef}></hr>

      <section id="skills" className="relative lg:h-full mt-10 w-3/4 mx-auto">
        <h1 className="text-center text-left text-2xl font-bold lg:text-3xl mb-5">
          I specialise in frontend web development.
        </h1>
        <div className="bg-zinc-100 mb-20 h-1/3 lg:h-1/4 rounded-lg lg:rounded-full">
          <div className="flex flex-wrap place-items-center text-center lg:grid lg:gap-1 lg:grid-cols-5 lg:grid-rows-1 mb-2 py-12 lg:py-2">
            <ImageListItem
              title="HTML"
              source="/images/html.png"
              altText="HTML logo"
              priority={true}
            />
            <ImageListItem
              title="CSS"
              source="/images/css.png"
              altText="CSS logo"
              priority={true}
            />
            <ImageListItem
              title="Javascript (ES6)"
              source="/images/javascript.png"
              altText="Javascript logo"
              priority={true}
            />
            <ImageListItem
              title="React"
              source="/images/react.png"
              altText="React logo"
              priority={true}
            />{" "}
            <ImageListItem
              title="Next.js"
              source="/images/nextjs.png"
              altText="HTML logo"
              priority={true}
            />
          </div>
        </div>
        <div>
          <h1 className="text-center text-left text-2xl font-bold lg:text-3xl mb-2">
            My other experience.
          </h1>
          <div className="bg-zinc-100 mb-10 h-1/3 lg:h-1/4 rounded-lg lg:rounded-full">
            <div className="flex flex-wrap place-items-center text-center lg:grid lg:gap-5 lg:grid-cols-4 lg:grid-rows-1 mb-5 p-6 lg:py-2">
              <ImageListItem
                title="Tailwind CSS"
                source="/images/tailwind.png"
                altText="Tailwind css logo"
                priority={true}
              />
              <ImageListItem
                title="Node JS"
                source="/images/nodejs-2.svg"
                altText="NodeJS logo"
                priority={true}
              />
              <ImageListItem
                title="Python"
                source="/images/python.png"
                altText="python logo"
                priority={true}
              />
              <ImageListItem
                title="Java"
                source="/images/java.png"
                altText="Java logo"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold lg:text-2xl lg:mb-20">
            I have a B.Sc in Computer Science, as well as a TOPIK (Korean
            Proficiency) level 5.
          </h1>
        </div>
      </section>
      <NextSection text="Final page I promise." scrollRef={socialRef} />

      <hr className="divide-solid outline-8 lg:my-10"></hr>

      <section
        id="callToAction"
        ref={socialRef}
        className="relative lg:h-screen mt-10 w-3/4 mx-auto"
      >
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-4 lg:grid-rows-1 place-items-center gap-5 lg:gap-0 lg:h-2/5">
          <div className="my-5 lg:col-start-1 lg:col-end-3">
            <h1 className="text-center text-left text-2xl font-bold lg:text-3xl">
              I am currently open for work.
            </h1>
          </div>
          <div className="lg:col-start-3">
            <Link href="/projects">
              <button className="px-10 py-7 text-2xl font-bold bg-amber-300 w-500 h-500 rounded-full hover:bg-black hover:text-white">
                My Projects
              </button>
            </Link>
          </div>
          <div className="">
            <Link href="/contactme">
              <button className="px-10 py-7 text-2xl font-bold text-white bg-black rounded-full hover:bg-amber-300 hover:text-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <h1 className="text-center text-left text-2xl font-bold lg:text-3xl py-5 my-9">
          Or contact me on social media:
        </h1>
        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 place-items-center gap-5">
          <div className="m-2">
            <Link href="https://twitter.com/Nick_JLane">
              <a className="text-xl">
                <Image
                  src="/images/twitter.png"
                  width={80}
                  height={80}
                  alt="Twitter logo"
                  priority={true}
                ></Image>
              </a>
            </Link>
          </div>
          <div className="m-2">
            <Link href="https://www.linkedin.com/in/nicholas-lane92/">
              <a className="text-xl">
                {" "}
                <Image
                  src="/images/linkedin.png"
                  width={80}
                  height={80}
                  alt="Linkedin logo"
                  priority={true}
                ></Image>
              </a>
            </Link>
          </div>
          <div className="m-2">
            <Link href="https://dev.to/nicklane">
              <a className="text-xl">
                {" "}
                <Image
                  src="/images/dev.png"
                  width={80}
                  height={80}
                  alt="dev.to logo"
                  priority={true}
                ></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid place-items-center">
          <button
            onClick={backToTopHandler}
            className="px-5 py-5 text-2xl font-bold bg-amber-300 w-500 h-500 mt-20 mb-10 lg:mb-1 rounded-full hover:bg-black hover:text-white"
          >
            Back to Top
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
