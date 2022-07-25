const minPartitions = (n) => {
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    max = Math.max(max, n[i] - '0');
  }
  return max;
};

// const f = (n) => Math.max(...n);
