var isPalindrome = function (s) {
  const strippedString = s.replace(/[^a-zA-Z0-9]/g, '');
  const reversedString = strippedString.split('').reverse().join('');
  return strippedString.toLowerCase() == reversedString.toLowerCase();
};
