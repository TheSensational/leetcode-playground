var isPowerOfThree = function (n) {
  // Math.log(n) 是以e为底n的对数
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
