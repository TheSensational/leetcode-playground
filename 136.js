var singleNumber = function (nums) {
  const map = {};
  // nums.forEach((n) => {
  //   if (!map[n]) {
  //     map[n] = 1;
  //   } else {
  //     map[n]++;
  //   }
  // })
  // for (const [num, times] of Object.entries(map)) {
  //   if (times === 1) return num;
  // }
  for (const n of nums) {
    map[n] ? delete map[n] : (map[n] = 1);
  }
  return Object.keys(map)[0];
};
