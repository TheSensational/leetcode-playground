var arrangeCoins = function (n) {
  let ans = 0;
  while (ans <= n) {
    n -= ans;
    ans++;
  }
  return ans - 1;
};
