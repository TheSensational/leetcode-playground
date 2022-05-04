const singleNumber = (nums) => {
  const map = {};
  for (const n of nums) {
    map[n] ? delete map[n] : (map[n] = 1);
  }
  return Object.keys(map)[0];
};
