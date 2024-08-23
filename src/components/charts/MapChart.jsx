import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618",
  ]);

const MapChart = () => {
  const data = [
    {
      id: "26",
      name: "Michigan",
      val: 9,
    },
    {
      id: "06",
      name: "California",
      val: 8,
    },
    {
      name: "Illinois",
      id: "17",
      val: 5,
    },
    {
      name: "New Orleans",
      id: "22",
      val: 6,
    },
  ];

  return (
    <div >
      <ComposableMap
        projection="geoAlbersUsa"
        scale={300}
        style={{
          width: "100%",
          height: "40em",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#ccc"
                  style={{
                    hover: {
                      fill: "#ddd",
                    },
                    pressed: {
                      fill: "#E42",
                    },
                  }}
                  fill={colorScale(cur?.val) || "#ffedea"}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
