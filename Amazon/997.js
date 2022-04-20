var findJudge = function (n, trust) {
  if (n - 1 > trust.length) return -1;
  const trustScores = new Array(n + 1).fill(0);
  for (const [x, y] of trust) {
    trustScores[x]--;
    trustScores[y]++;
  }
  for (let i = 1; i <= n; i++) {
    if (trustScores[i] === n - 1) return i;
  }
  return -1;
};
