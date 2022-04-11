var deleteAndEarn = function (nums) {
  const dp = new Array(10001).fill(0);
  for (let num of nums) dp[num] += num;
  for (let i = 2; i < dp.length; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
  return dp.pop();
};
