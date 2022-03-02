var maxSubArray = function (nums) {
  let prev = 0,
    res = nums[0];
  nums.forEach((num) => {
    prev = Math.max(prev + num, num);
    res = Math.max(prev, res);
  });
  return res;
};
