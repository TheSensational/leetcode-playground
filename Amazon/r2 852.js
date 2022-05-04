const peakIndexInMountainArray = (arr) => {
  const maxVal = Math.max(...arr);
  return arr.findIndex((num) => num === maxVal);
};
