var minimumBuckets = function (street) {
  const copy = [...street];
  let buckets = 0;
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === 'H') {
      if (copy[i - 1] === 'B') continue;
      if (copy[i - 1] === '.') {
        copy[i - 1] = 'B';
        buckets++;
        continue;
      }
      if (copy[i + 1] === '.') {
        copy[i + 1] = 'B';
        buckets++;
        continue;
      }
      return -1;
    }
  }
  return buckets;
};
