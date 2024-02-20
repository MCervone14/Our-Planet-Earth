import { useRef, useEffect, useState } from "react";
import { select, geoPath, geoEquirectangular, min, max, scaleLinear } from "d3";
import useResizeObserver from "../hooks/useResizeObserver";

const GeoChart = ({ data, property, isShowWidget }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState({
    name: "",
    population: "",
    population_rank: "",
    economy: "",
    income_grp: "",
  });

  if (selectedCountry !== null) {
    isShowWidget(() => false);
  }

  if (selectedCountry === null) {
    isShowWidget(() => true);
  }

  // will be called initially on page load and on every data change after.
  useEffect(() => {
    const svg = select(svgRef.current);

    const minProp = min(
      data.features,
      (feature) => feature.properties[property]
    );

    const maxProp = max(
      data.features,
      (feature) => feature.properties[property]
    );

    const colorScale = scaleLinear()
      .domain([minProp, maxProp])
      .range(["#B2D3C2", "#028A0F"]);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if dimensions are not available.

    const w = 3000;
    const h = 1500;

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // Projects geo-coordinates on a 2D plane
    const projection = geoEquirectangular()
      .fitSize([width, height], selectedCountry || data)
      .precision(100);

    // takes geojson data and transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    // render each country
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (event, feature) => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .on("mouseenter", (event, feature) => {
        const [x, y] = pathGenerator.centroid(feature);
        setTooltipPosition({ x, y });
        setTooltipContent({
          name: feature.properties.name,
          population: feature.properties.pop_est,
          population_rank: feature.properties.pop_rank,
          economy: feature.properties.economy,
          income_grp: feature.properties.income_grp,
        });
      })
      .on("mouseleave", () => {
        setTooltipContent("");
      })
      .attr("class", "country")
      .transition()
      .duration(1000)
      .attr("fill", (feature) => colorScale(feature.properties[property]))
      .attr("d", (feature) => pathGenerator(feature));

    svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        (feature) =>
          feature &&
          feature.properties.name +
            ": " +
            feature.properties[property].toLocaleString()
      )
      .attr("x", 10)
      .attr("y", 25);
  }, [data, property, dimensions, selectedCountry]);

  // render the selected country text

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef} className="w-[100vw] h-[100vh]"></svg>

      {tooltipContent && (
        <div className="tooltip-container">
          <text
            className="tooltip text-2xl text-bold"
            x={tooltipPosition.x}
            y={tooltipPosition.y}
          >
            <p>{tooltipContent.name}</p>
            <p>Population: {tooltipContent.population}</p>
            <p>Population Rank: {tooltipContent.population_rank}</p>
            <p>Economy: {tooltipContent.economy}</p>
            <p>Income Group: {tooltipContent.income_grp}</p>
          </text>
        </div>
      )}
    </div>
  );
};

export default GeoChart;
