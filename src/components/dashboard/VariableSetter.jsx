import React, { useState } from "react";

const VariableSetter = ({ setContinous, setDiscrete }) => {
  const handleContinous = (value) => {
    setContinous(value);
  };
  const handleDiscrete = (value) => {
    setDiscrete(value);
  };

  const continousVariables = [
    {
      name: "Velocidad de subida",
      value: "speed_up",
    },
    {
      name: "Velocidad de bajada",
      value: "speed_down",
    },
    {
      name: "LMI",
      value: "income_lmi",
    },
    {
      name: "Prop. banda ancha",
      value: "internet_perc_broadband",
    },
  ];

  const discreteVariables = [
    {
      name: "Tecnología",
      value: "technology",
    },
    {
      name: "Ciudad",
      value: "city",
    },
  ];
  return (
    <div className="grid grid-flow-col w-max p-7">
      <label className="form-control mr-7">
        <div className="label">
          <span className="label-text">Variables continuas</span>
        </div>
        <select onChange={(e)=>handleContinous(e.target.value)} className="select select-bordered">
          {continousVariables.map((variable) => (
            <option key={variable.value} value={variable.value}>
              {variable.name}
            </option>
          ))}
        </select>
      </label>
      <label className="form-control ">
        <div className="label">
          <span className="label-text">Variables categoricas</span>
        </div>
        <select onChange={(e) => handleDiscrete(e.target.value)} className="select select-bordered">
          {discreteVariables.map((variable) => (
            <option key={variable.value} value={variable.value}>
              {variable.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default VariableSetter;
