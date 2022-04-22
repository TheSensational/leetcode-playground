var mostCommonWord = function (paragraph, banned) {
  let arr = paragraph.toLowerCase().split(/\W+/g);
  let map = {};
  for (const word of arr) {
    if (map[word]) {
      map[word]++;
    } else {
      map[word] = 1;
    }
  }
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .filter((word) => !banned.includes(word))[0];
};
