var isHappy = function (n) {
  let map = {};
  while (n !== 1 && !map[n]) {
    map[n] = true;
    n = getSum(n);
  }
  return n === 1;
};

const getSum = function (n) {
  return [...(n + '')].reduce((result, num) => result + Math.pow(+num, 2), 0);
};
