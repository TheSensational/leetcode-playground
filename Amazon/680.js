var validPalindrome = function (s) {
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    if (s[low] !== s[high]) {
      return helper(s, low + 1, high) || helper(s, low, high - 1);
    } else {
      low++, high--;
    }
  }
  return true;
};

const helper = (s, low, high) => {
  while (low < high) {
    if (s[low] !== s[high]) return false;
    low++;
    high--;
  }
  return true;
};
