var reorderLogFiles = function (logs) {
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let words = [];
  let numbers = [];
  logs.forEach((log) => {
    let idx = log.indexOf(' ');
    if (map[log[idx + 1]]) {
      words.push(log);
    } else {
      numbers.push(log);
    }
  });
  words.sort((a, b) => {
    let firstLetterA = a.slice(a.indexOf(' '));
    let firstLetterB = b.slice(b.indexOf(' '));
    if (firstLetterA === firstLetterB) return a < b ? -1 : 1;
    return firstLetterA < firstLetterB ? -1 : 1;
  });
  return words.concat(numbers);
};
