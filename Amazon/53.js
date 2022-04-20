var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

// var maxSubArray = function (nums) {
//   if (nums.length === 1) return nums[0];
//   let dp = new Array(nums.length);
//   dp[0] = nums[0];
//   let max = dp[0];
//   for (let i = 1; i < dp.length; i++) {
//     dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
//     max = Math.max(max, dp[i]);
//   }
//   return max;
// };
