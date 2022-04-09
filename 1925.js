var countTriples = function (n) {
  let count = 0;
  for (let a = 3; a < n; a++)
    for (let b = 3; b < n; b++)
      for (let c = 3; c <= n; c++) if (a * a + b * b === c * c) count++;
  return count;
};
