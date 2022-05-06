const countTriples = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const sqrt = Math.sqrt(i ** 2 + j ** 2);
      if (sqrt % 1 !== 0) continue;
      if (sqrt <= n) count += 2;
    }
  }
  return count;
};
