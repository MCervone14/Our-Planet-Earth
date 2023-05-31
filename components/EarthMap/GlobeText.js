import { Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const GlobeText = () => {
  const { camera } = useThree();
  const textRef = useRef();

  useFrame(() => {
    textRef.current.rotation.copy(camera.rotation);
  });

  return (
    <Text ref={textRef} position={[0, 5.7, 0]} scale={0.7} color={"steelblue"}>
      Everything is Connected!
    </Text>
  );
};

export default GlobeText;
