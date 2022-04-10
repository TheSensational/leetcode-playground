var peakIndexInMountainArray = function (arr) {
  return arr.findIndex((num) => num === Math.max(...arr));
};
