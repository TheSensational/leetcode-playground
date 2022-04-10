var frequencySort = function (nums) {
  const map = {};
  for (const n of nums) {
    map[n] ? map[n]++ : (map[n] = 1);
  }
  return nums.sort((a, b) => map[a] - map[b] || b - a);
};
