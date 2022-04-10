var reverseWords = function (s) {
  let words = s.split(' ');
  const res = words.map((word) => word.split('').reverse().join(''));
  return res.join(' ');
};
