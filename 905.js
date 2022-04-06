var sortArrayByParity = function (nums) {
  const res = [];
  nums.forEach((num) => (num % 2 === 0 ? res.unshift(num) : res.push(num)));
  return res;
};
