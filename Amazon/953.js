var isAlienSorted = function (words, order) {
  let copy = words.slice();
  copy.sort((a, b) => {
    let shorter = a.length < b.length ? a : b;
    for (let i = 0; i < shorter.length; i++) {
      if (order.indexOf(a[i]) < order.indexOf(b[i])) return -1;
      else if (order.indexOf(a[i]) > order.indexOf(b[i])) return 1;
      else continue;
    }
    return a.length < b.length ? -1 : 1;
  });
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== copy[i]) return false;
  }
  return true;
};
