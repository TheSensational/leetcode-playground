const sortArrayByParity = (nums) => {
  const res = [];
  for (const n of nums) {
    n % 2 === 0 ? res.unshift(n) : res.push(n);
  }
  return res;
};
