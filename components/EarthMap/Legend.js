import { BsCircleFill } from "react-icons/bs";

const Legend = () => {
  return (
    <div className="absolute z-100 text-xl  font-bold right-5 bottom-5 bg-[steelblue] px-1 rounded-md text-black bg-opacity-70">
      <p className="flex items-center gap-5 ">
        <span className="text-yellow-300">
          <BsCircleFill />
        </span>
        Global News Issues (Coming Soon)
      </p>
      <p className="flex items-center gap-5">
        <span className="text-red-600">
          <BsCircleFill />
        </span>
        Our Planet Earth Articles
      </p>
    </div>
  );
};

export default Legend;
