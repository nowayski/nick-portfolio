import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blogs({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Blogs - Nicholas Lane</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="m-auto text-left my-5 my-20 text-lg grid place-items-center w-4/5">
        <Image
          src="/images/blog.png"
          width={100}
          height={100}
          alt="blog icon"
          priority={true}
        ></Image>
        <ul className="mb-10 font-semibold">
          {allPostsData.map(({ id, date, title }) => (
            <li className="my-10" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-sky-600 text-lg text-center font-bold lg:text-2xl hover:text-amber-300 underline">
                  {title}
                </a>
              </Link>
              <br />
              {id}
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}
