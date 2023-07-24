import fs from "fs";
import Head from "next/head";
import path from "path";
import matter from "gray-matter";
import { Suspense, useRef, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import {
  Sky,
  Loader,
  Cloud,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import Globe from "../components/EarthMap/Globe";
import { createPoint } from "../lib/utils";
import MapMarker from "../components/EarthMap/MapMarker";
import Legend from "../components/EarthMap/Legend";
import ArticleItem from "../components/ArticleItem";
import RelatedNewsArticleItem from "../components/RelatedNewsArticleItem";

extend({ Globe });

const OurPlanet = ({ posts, relatedNewsPosts }) => {
  const orbitCameraRef = useRef();
  const [hoveredPost, setHoveredPost] = useState(null);
  const [activePost, setActivePost] = useState(false);

  const getHoverPost = (post) => {
    setHoveredPost(post);
  };

  return (
    <div className="flex-col h-[100vh]">
      <Head>
        <title>Our Planet Earth | Global News </title>
      </Head>
      <Suspense fallback={<Loader />}>
        <div>
          <h1 className="text-[steelblue] font-bold font-[Tangerine] text-center text-[6.25rem] tablet:text-[5rem] mobile:text-[2.5rem] my-12">
            Everything is Connected!
          </h1>
        </div>
        <div className="flex w-full h-full mobile:flex-col mobile:gap-10">
          <div className="w-1/2 relative mobile:w-[85%] mobile:mx-auto mobile:h-1/2">
            <Canvas dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 1, 14]} />
              <OrbitControls
                ref={orbitCameraRef}
                maxDistance={16}
                minDistance={6}
                rotateSpeed={0.2}
              />
              <ambientLight intensity={0.8} />
              <pointLight intensity={2} position={[0, 0, -1000]} />
              <Sky position={[1, 6, 0]} />
              <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
              <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.5} />
              <Globe />
              {posts.map((post, index) => (
                <MapMarker
                  getHoverPost={getHoverPost}
                  setActivePost={setActivePost}
                  key={index}
                  post={post}
                  position={createPoint(
                    post.frontmatter.lat_lng[0],
                    post.frontmatter.lat_lng[1]
                  )}
                />
              ))}
              {relatedNewsPosts.map((newsPost, index) => (
                <MapMarker
                  getHoverPost={getHoverPost}
                  setActivePost={setActivePost}
                  key={index}
                  post={newsPost}
                  position={createPoint(
                    newsPost.frontmatter.lat_lng[0],
                    newsPost.frontmatter.lat_lng[1]
                  )}
                />
              ))}
            </Canvas>
            <Legend />
          </div>
          <div className="w-1/2 flex justify-center items-center mobile:w-full">
            <div className="flex justify-center items-center ">
              {!hoveredPost && (
                <div className="border-2 border-[#2a4cac] rounded w-full justify-center items-center px-2 mobile:mx-10">
                  <p className="text-sm text-center">
                    You can use mouse to rotate globe! To zoom in/out use mouse
                    wheel while hovering over globe.
                  </p>
                  <p className="text-sm text-center">
                    Hovering over any marker on globe will show their details.
                  </p>
                </div>
              )}
            </div>
            {activePost && hoveredPost !== null ? (
              <div className="animate-in slide-in-from-bottom h-full overflow-scroll overflow-x-hidden scrollbar">
                <ArticleItem
                  frontmatter={hoveredPost.frontmatter}
                  content={hoveredPost.content}
                />
              </div>
            ) : null}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export async function getStaticProps() {
  //get files from root posts folder
  const files = fs.readdirSync(path.join("posts"));
  const relatedNewsFiles = fs.readdirSync(path.join("news-posts"));

  // get slug and frontmatter from  news-posts
  const relatedNewsPosts = relatedNewsFiles.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("news-posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      posts,
      relatedNewsPosts,
    },
  };
}

export default OurPlanet;
