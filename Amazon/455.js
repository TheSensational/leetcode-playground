var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0,
    res = 0;
  for (const size of s) {
    if (size >= g[i]) res++, i++;
  }
  return res;
};
