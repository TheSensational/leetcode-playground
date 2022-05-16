const hammingWeight = (int) => {
  const str = int.toString(2);
  let count = 0;
  for (let char of str) {
    if (char === '1') count++;
  }
  return count;
};
