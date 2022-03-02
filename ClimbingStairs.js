var climbStairs = function (n) {
  (let = 0), (b = 0), (c = 1);
  for (let i = 1; i <= n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
};
