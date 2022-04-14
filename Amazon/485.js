var findMaxConsecutiveOnes = function (nums) {
  return nums
    .join('')
    .split('0')
    .reduce((acc, cur) => Math.max(acc, cur.length), 0);
};
