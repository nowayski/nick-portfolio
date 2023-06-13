import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import ProjectItem from "../components/ProjectItem";
import Image from "next/image";

export default function Projects() {
  const gexDesc = [
    "This project was created using React js with vanilla css with a node express backend.",
    "The purpose was to consume a simple API, to display price history for runescape 3 in game auction house.",
    "I achieved this by receving JSON files from the API and dynamically displaying them in expanded divs using the recharts library.",
  ];

  const portDesc = [
    "This project was created using Next js with Tailwind css.",
    "The purpose was to display information about myself, my projects and parse my blogs using a markdown parser.",
    "I hoped to achieve this using next's dynamic routing, static generation and various built in components to make the website faster.",
  ];

  const gexImages = [
    "/images/projects/gex-search-circle.png",
    "/images/projects/graph-circle.png",
  ];
  const portfolioImages = [
    "/images/projects/portfolio-circle.png",
    "/images/projects/portfolio-mobile-circle.png",
    "/images/projects/portfolio-skills-circle.png",
  ];
  return (
    <div>
      <Head>
        <title>Projects - Nicholas Lane</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="m-auto grid place-items-center">
        <h1 className="mt-10 text-center text-4xl font-bold  lg:text-4xl">
          My Projects
        </h1>
        {/* <Image
          src="/images/project.png"
          width={100}
          height={100}
          alt="blog icon"
          priority={true}
        ></Image> */}
      </div>
      <div className="flex flex-col place-items-center gap-0">
        <div className="flex flex-row w-3/4 lg:w-2/5">
          <ProjectItem
            imageList={gexImages}
            title="Runescape 3 Grand Exchange Search"
            linkURL="https://gex-search.herokuapp.com/"
            description={gexDesc}
          />
        </div>

        <div className="flex flex-row w-3/4 lg:w-2/5">
          <ProjectItem
            imageList={portfolioImages}
            title="My custom Portfolio Website"
            linkURL="http://www.nicholasjlane.com/"
            description={portDesc}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
