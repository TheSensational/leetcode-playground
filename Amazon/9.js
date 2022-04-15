var isPalindrome = function (x) {
  const arr = [...(x + '')];
  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      return false;
    }
  }
  return true;
};
