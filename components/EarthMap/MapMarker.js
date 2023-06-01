import { Image } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

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
        return "yellow";
    }
  };

  return (
    <mesh
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
        alt="map marker"
        scale={0.1}
        position={[0, 0, 0.01]}
        color={isHovered ? "hotpink" : "white"}
        transparent
      />
      {/* <Sphere args={[0.02, 50, 50]}>
        <meshBasicMaterial
          attach="material"
          color={
            isHovered
              ? "hotpink"
              : getMarkerColor(post.frontmatter.news_category)
          }
        />
      </Sphere> */}
    </mesh>
  );
};

export default MapMarker;
