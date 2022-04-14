var findKthPositive = function (arr, k) {
  const missing = [],
    len = arr.length + k;
  for (let i = 0, j = 1; j <= len; j++) {
    arr[i] === j ? i++ : missing.push(j);
    if (missing.length === k) return missing.pop();
  }
};
