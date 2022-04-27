var longestCommonPrefix = function (strs) {
  if (!strs) return '';
  let ans = '';
  const len = Math.min(...strs.map((str) => str.length));
  for (let i = 0; i < len; i++) {
    const char = strs[0][i];
    if (strs.every((str) => str[i] === char)) ans += char;
    else break;
  }
  return ans;
};
