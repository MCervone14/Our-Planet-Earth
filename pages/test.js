import GeoChart from "../components/GeoChart";
import data from "../public/GeoData_LowRes.geo.json";
import { useState } from "react";

const Test = () => {
  const [property, setProperty] = useState("pop_est");
  return (
    <div>
      <h1 className="text-[steelblue] font-bold font-[Tangerine] text-center text-8xl tablet:text-7xl mobile:text-4xl my-12">
        Everything is Connected!
      </h1>
      <GeoChart data={data} property={property} />
      <div className="absolute top-[110%] left-[50%]">
        <h2>Select property to highlight</h2>
        <select
          className="w-[200px] h-[40px] bg-gray-800 text-white border-none rounded-md"
          value={property}
          onChange={(event) => setProperty(event.target.value)}
        >
          <option value="pop_est">Population</option>
          <option value="name_len">Name length</option>
        </select>
      </div>
    </div>
  );
};

export default Test;
