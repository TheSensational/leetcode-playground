const countBinarySubstrings = (s) => {
  let ptr = 0,
    len = s.length,
    cur = 0,
    ans = 0;
  while (ptr < len) {
    let count = 0;
    const char = s[ptr];
    while (s[ptr] === char && ptr < len) {
      ptr++;
      count++;
    }
    ans += Math.min(count, cur);
    cur = count;
  }
  return ans;
};
