const findTheDifference = (s, t) => {
  for (const char of s) {
    t = t.replace(char, '');
  }
  return t;
};
