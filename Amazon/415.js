var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? num1[i] - '0' : 0;
    const y = j >= 0 ? num2[j] - '0' : 0;
    const res = x + y + add;
    ans.push(res % 10);
    add = Math.floor(res / 10);
    i--;
    j--;
  }
  return ans.reverse().join('');
};
