import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

const Legend = () => {
  return (
    <div className="absolute z-100 right-2 bottom-5 bg-[steelblue] px-1 pb-1 rounded-md text-black bg-opacity-70">
      <p className="flex items-center gap-5 m-0 p-0 py-1 text-xs">
        <span className="text-yellow-300">
          <BsCircleFill />
        </span>
        Global News Issues (Coming Soon)
      </p>
      <p className="flex items-center gap-5 m-0 p-0 text-xs">
        <span>
          <Image
            src="/images/articleMarker.png"
            alt="legend marker"
            width={16}
            height={16}
            className="text-red-500"
          />
        </span>
        Our Planet Earth Articles
      </p>
    </div>
  );
};

export default Legend;
