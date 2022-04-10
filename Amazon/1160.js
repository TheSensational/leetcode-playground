var countCharacters = function (words, chars) {
  return words.reduce((acc, word, idx) => {
    for (const s of [...chars]) word = word.replace(s, '');
    return acc + (word.length === 0 ? words[idx].length : 0);
  }, 0);
};
