const reverseWords = (s) => {
  return s
    .split(' ')
    .map((s) => s.split('').reverse().join(''))
    .join(' ');
};
