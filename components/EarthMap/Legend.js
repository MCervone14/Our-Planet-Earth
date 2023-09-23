import Image from "next/image";

/* Documentation for Legend.js file

  Legend component for the Globe.
  It displays the legend for the markers on the globe.

*/

const Legend = () => {
  return (
    <div className="absolute z-100 right-12 bottom-2 bg-[steelblue] px-1 pb-1 rounded-md text-black bg-opacity-70">
      <p className="flex items-center gap-5 m-0 p-0 py-1 text-xs">
        <span>
          <Image
            src="/images/NewsArticleMarker.png"
            alt="legend marker"
            width={16}
            height={16}
          />
        </span>
        Related News Articles
      </p>
      <p className="flex items-center gap-5 m-0 p-0 text-xs">
        <span>
          <Image
            src="/images/articleMarker.png"
            alt="legend marker"
            width={16}
            height={16}
          />
        </span>
        Our Planet Earth Articles
      </p>
    </div>
  );
};

export default Legend;
