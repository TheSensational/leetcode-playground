const findNumbers = (nums) => {
  let ans = 0;
  for (const n of nums) {
    String(n).length % 2 === 0 ? ans++ : null;
  }
  return ans;
};
