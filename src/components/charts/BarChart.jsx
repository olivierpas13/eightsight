// import { AgCharts } from "ag-charts-react";
// import { useState } from "react";
// import data from "../../data/db";
// import _ from "lodash";
// import { useEffect } from "react";

// const BarChart = ({variable}) => {
//   const [chartOptions, setChartOptions] = useState({
//     // Data: Data to be displayed in the chart
//     data: _.orderBy(data, "speed_up", "desc"),
//     // data: _.orderBy(data, [variable], ["asc"]),
//     // Series: Defines which chart type and data to use
//     series: [{ type: "bar", xKey: "id", yKey: variable }],
//   });

//   useEffect(()=>
//   {
//     console.log(variable);
//     setChartOptions({
//       series: [{ type: "bar", xKey: "id", yKey: variable }],
//     })
//   }, [variable])
//   return <AgCharts options={chartOptions} />;
// };

// export default BarChart;

import { ResponsiveBar } from "@nivo/bar";
import data from "../../data/db";
import _ from "lodash";

const formattedData = [
  {
    speed: 300,
    ocurrences: 0,
  },
  {
    speed: 20,
    ocurrences: 0,
  },
  {
    speed: 10,
    ocurrences: 0,
  },
  {
    speed: 5,
    ocurrences: 0,
  },
];

data.map((el) => {
  if (el.speed_up == 300) {
    formattedData[0].ocurrences++;
  }
  if (el.speed_up == 20) {
    formattedData[1].ocurrences++;
  }
  if (el.speed_up == 10) {
    formattedData[2].ocurrences++;
  }
  if (el.speed_up == 5) {
    formattedData[3].ocurrences++;
  }
});

console.log(formattedData);

const BarChart = ({ variable }) => (
  <ResponsiveBar
    data={formattedData}
    keys={["ocurrences"]}
    indexBy="speed"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        id: "dots",
      }
    ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
  />
);

export default BarChart;
