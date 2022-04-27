var validMountainArray = function (arr) {
  let n = arr.length,
    i = 0;
  while (i + 1 < n && arr[i] < arr[i + 1]) i++;
  if (i === 0 || i === n - 1) return false;
  while (i + 1 < n && arr[i] > arr[i + 1]) i++;
  return i === n - 1;
};
