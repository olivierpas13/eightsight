import { ResponsiveSunburst } from "@nivo/sunburst";

import database from "../../data/db"

const SunburstChart = () => {
  const chicago = database.filter((el) => el.city === "chicago");
  const newOrleans = database.filter((el) => el.city === "new orleans");
  const detroit = database.filter((el) => el.city === "detroit");
  const losAngeles = database.filter((el) => el.city === "los angeles");

const data = {
  name: "nivo",
  color: "hsl(299, 70%, 50%)",
  children: [
    {
      name: "Chicago",
      color: "hsl(0, 70%, 50%)",
      children: [
        {
          color: "hsl(30, 70%, 50%)",
          loc: chicago.filter((el) => el.technology === "Not Fiber").length,
          name: "chicago sin fibra",
        },
        {
          color: "hsl(90, 70%, 50%)",
          loc: chicago.filter((el) => el.technology === "Fiber").length,
          name: "chicago con fibra",
        },
      ],
    },
    {
      name: "New Orleans",
      color: "hsl(60, 70%, 50%)",
      children: [
        {
          color: "hsl(120, 70%, 50%)",
          loc: newOrleans.filter((el) => el.technology === "Not Fiber").length,
          name: "new-orleans sin fibra",
        },
        {
          color: "hsl(180, 70%, 50%)",
          loc: newOrleans.filter((el) => el.technology === "Fiber").length,
          name: "new-orleans con fibra",
        },
      ],
    },
    {
      name: "DETROIT",
      color: "hsl(120, 70%, 50%)",
      children: [
        {
          color: "hsl(240, 70%, 50%)",
          loc: detroit.filter((el) => el.technology === "Not Fiber").length,
          name: "detroit sin fibra",
        },
        {
          color: "hsl(300, 70%, 50%)",
          loc: detroit.filter((el) => el.technology === "Fiber").length,
          name: "detroit con fibra",
        },
      ],
    },
    {
      name: "LOS ANGELES",
      color: "hsl(180, 70%, 50%)",
      children: [
        {
          color: "hsl(360, 70%, 50%)",
          loc: losAngeles.filter((el) => el.technology === "Not Fiber").length,
          name: "los-angeles sin fibra",
        },
        {
          color: "hsl(240, 70%, 50%)",
          loc: losAngeles.filter((el) => el.technology === "Fiber").length,
          name: "los-angeles con fibra",
        },
      ],
    },
  ],
};

  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      theme={{
        textColor: "#333333",
        labels: {
          text: 
          {
            scale: 1.2,
        },
        },
      }}
      value="loc"
      cornerRadius={5}
      borderColor={{ theme: "background" }}
      colors={{ scheme: "set2" }}
      childColor={{
        from: "color",
        modifiers: [["darker", 0.3]],
      }}
      enableArcLabels={true}
      arcLabel="formattedValue"
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 5]],
      }}
    />
  );
};

export default SunburstChart;
