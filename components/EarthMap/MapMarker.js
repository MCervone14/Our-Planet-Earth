import { Image } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

/* Documentation for MapMarker.js file

  It takes the position of the marker and the post data to display the marker on the globe.


*/

const MapMarker = ({ position, post, getHoverPost, setActivePost }) => {
  const { x, y, z } = position;
  const [isHovered, setIsHovered] = useState(false);
  const { camera } = useThree();
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.copy(camera.rotation);
    if (isHovered) {
      getHoverPost(post);
    }
  });

  const getMarkerColor = (newsCategory) => {
    switch (newsCategory) {
      case "Our Planet Earth Article":
        return "/images/articleMarker.png";
      case "Our Planet Earth Video":
        return "blue";
      case "Our Planet Earth Podcast":
        return "green";
      default:
        return "/images/NewsArticleMarker.png";
    }
  };

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        setActivePost(true);
      }}
      ref={meshRef}
      position={[x, y, z]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
        setActivePost(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
    >
      <Image
        url={getMarkerColor(post.frontmatter.news_category)}
        alt={`${post.frontmatter.title} map marker`}
        scale={0.1}
        position={[0, 0, 0.01]}
        color={isHovered ? "hotpink" : "white"}
        transparent
      />
    </mesh>
  );
};

export default MapMarker;
