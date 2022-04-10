var twoSumLessThanK = function (nums, k) {
  let max = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum < k && sum > max) max = sum;
    }
  }
  return max;
};
