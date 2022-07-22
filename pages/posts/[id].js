import { getAllPostIds, getPostData } from "../../lib/posts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Head from "next/head";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div>
      {" "}
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />
      <div className="grid place-items-center">
        <Image
          src="/images/blog.png"
          width={100}
          height={100}
          alt="blog icon"
          priority={true}
        ></Image>
      </div>
      <div className="prose my-5 w-4/5 text-left text-lg m-auto lg:grid lg:place-items-center">
        <h1>{postData.title}</h1>
        <h3>
          <Date dateString={postData.date} />
        </h3>
        <br />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
      <Footer />
    </div>
  );
}
