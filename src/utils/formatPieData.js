const formatPieData = (data, key) => {
  console.log(key);
  const counts = data.reduce((acc, item) => {
    const keyValue = item[key];
    if (acc[keyValue]) {
      acc[keyValue] += 1;
    } else {
      acc[keyValue] = 1;
    }
    return acc;
  }, {});

  const formattedData = Object.keys(counts).map(keyValue => ({
    id: keyValue,
    value: counts[keyValue]
  }));

  return formattedData;
};



export default formatPieData;