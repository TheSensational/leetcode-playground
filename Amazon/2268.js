const minimumKeypresses = (s) => {
  let freq = new Array(26).fill(0);
  for (const c of s) {
    const charCode = c.charCodeAt() - 97;
    freq[charCode]++;
  }
  freq.sort((a, b) => b - a);
  let res = 0,
    times = 0;
  for (let i = 0; i < freq.length; i++) {
    if (i % 9 === 0) times++;
    res += times * freq[i];
  }
  return res;
};
