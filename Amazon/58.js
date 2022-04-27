var lengthOfLastWord = function (s) {
  const words = s.trim().split(' ');
  return words.pop().length;
};
