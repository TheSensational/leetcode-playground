var minCostClimbingStairs = function (cost) {
  // bottom-up
  const dp = new Array(cost.length + 1);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2]);
  }
  return dp[dp.length - 1];
};
