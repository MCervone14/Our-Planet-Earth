import MapBoxGlobe from "../components/MapBox-Globe";

import { useState } from "react";

const Test = () => {
  return (
    <div>
      <h1 className="text-[steelblue] font-bold font-[Tangerine] text-center text-8xl tablet:text-7xl mobile:text-4xl my-6">
        Everything is Connected!
      </h1>
      <MapBoxGlobe />
    </div>
  );
};

export default Test;
