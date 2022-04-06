var runningSum = function (nums) {
  for (let i = 0, run = 0; i < nums.length; i++) {
    nums[i] = run += nums[i];
  }
  return nums;
};
