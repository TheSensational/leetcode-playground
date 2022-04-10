var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (char of t) {
    s = s.replace(char, '');
  }
  return s.length === 0;
};
