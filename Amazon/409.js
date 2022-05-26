const longestPalindrome = (s) => {
  let res = 0;
  let set = new Set();
  for (const char of s) {
    if (set.has(char)) {
      set.delete(char);
      res += 2;
    } else {
      set.add(char);
    }
  }
  return res + (set.size > 0 ? 1 : 0);
};
