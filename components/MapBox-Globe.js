import { useRef, useState, useEffect } from "react";
import { features } from "../OurPlanetEarthMarkers";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MY_MAPBOX_API_TOKEN;
mapboxgl.accessToken =
  "pk.eyJ1IjoibWdjMjMiLCJhIjoiY2xzdjllOWc4MmRjbTJrbXIxMWt4YW9yNCJ9.UK5CPZT6cjgUzl_4MEHh_Q";

const MapBoxGlobe = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      projection: "globe",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on("load", () => {
      // Add an image to use as a custom marker
      map.current.loadImage("/red-dot.png", (error, image) => {
        if (error) throw error;
        map.current.addImage("custom-marker", image);
        // Add a GeoJSON source with 2 points
        map.current.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: features,
          },
        });

        // Add a symbol layer
        map.current.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            // get the title name from the source's "title" property
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.25],
            "text-anchor": "top",
          },
        });
        // Add a click event listener to the map
        map.current.on("click", "points", (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const title = e.features[0].properties.title;

          // Ensure that if the map is zoomed out, the popup appears over the correct feature
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          // Create a popup
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<h3>${title}</h3>`)
            .addTo(map.current);
        });

        // Change the cursor to a pointer when the mouse is over the layer
        map.current.on("mouseenter", "points", () => {
          map.current.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves
        map.current.on("mouseleave", "points", () => {
          map.current.getCanvas().style.cursor = "";
        });
      });
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto mb-12">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapBoxGlobe;
