import { useRef, useMemo } from "react";
import { useTexture, Sphere } from "@react-three/drei";

import vertexShader from "../../public/shaders/vertex.glsl";
import fragmentShader from "../../public/shaders/fragment.glsl";

const Globe = () => {
  const globe = useRef();
  const mapTexture = useTexture("/earthMap10k.jpg");

  const uniforms = useMemo(
    () => ({
      globeTexture: { value: mapTexture },
    }),
    [mapTexture]
  );

  return (
    <mesh ref={globe}>
      <Sphere args={[5, 50, 50]} rotation={[0, -Math.PI / 2, 0]}>
        <shaderMaterial
          attach={"material"}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </Sphere>
    </mesh>
  );
};

export default Globe;
