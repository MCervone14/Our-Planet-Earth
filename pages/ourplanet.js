import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Suspense, useRef, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import {
  Sky,
  Loader,
  CameraControls,
  Cloud,
  PerspectiveCamera,
} from "@react-three/drei";
import Globe from "../components/EarthMap/Globe";
import { createPoint } from "../lib/utils";
import MapMarker from "../components/EarthMap/MapMarker";
import GlobeText from "../components/EarthMap/GlobeText";
import Post from "../components/Post";
import Legend from "../components/EarthMap/Legend";

extend({ Globe });

const OurPlanet = ({ posts }) => {
  const cameraControlRef = useRef();
  const [hoveredPost, setHoveredPost] = useState(null);
  const [activePost, setActivePost] = useState(false);

  const getHoverPost = (post) => {
    setActivePost(true);
    setHoveredPost(post);
  };

  return (
    <div className="flex justify-between h-[87vh] mobile:flex-col mobile:gap-10">
      <Suspense fallback={<Loader />}>
        <div className="min-h-full w-1/2 mobile:w-full relative">
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <GlobeText />
            <ambientLight intensity={0.8} />
            <pointLight intensity={2} position={[0, 0, -1000]} />
            <CameraControls ref={cameraControlRef} />
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
          </Canvas>
          <Legend />
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 gap-5 mobile:w-full">
          <div className="flex gap-10">
            <button
              className="hover:bg-[#B0C4DE] text-[#2a4cac] py-2 px-4 rounded cursor-pointer text-sm font-bold border-2 border-[#2a4cac]"
              onClick={() =>
                cameraControlRef.current?.rotate(Math.PI / 4, 0, true)
              }
            >
              Rotate Globe
            </button>
            <button
              className="hover:bg-[#B0C4DE] text-[#2a4cac] py-2 px-4 rounded cursor-pointer text-sm font-bold border-2 border-[#2a4cac]"
              onClick={() => cameraControlRef.current?.reset(true)}
            >
              Reset Globe
            </button>
          </div>
          <div className="border-2 border-[#2a4cac] p-2 rounded mx-5">
            <p className="text-sm text-center">
              You can use mouse to rotate globe! To zoom in/out use mouse wheel
              while hovering over globe.
            </p>
            <p className="text-sm text-center">
              Hovering over any marker on globe will show their details.
            </p>
          </div>
          <div className="w-1/2 flex justify-center relative">
            {activePost && hoveredPost !== null ? (
              <div className="animate-in slide-in-from-bottom">
                <Post post={hoveredPost} />
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

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default OurPlanet;
