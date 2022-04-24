var reverse = function (x) {
  const reverse = parseInt(
    Math.abs(x).toString().split('').reverse().join('') * Math.sign(x)
  );
  return reverse >= -(2 ** 31) && reverse <= 2 ** 31 ? reverse : 0;
};
