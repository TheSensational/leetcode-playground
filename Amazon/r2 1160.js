const countCharacters = (words, chars) => {
  return words.reduce((acc, word, idx) => {
    for (const char of [...chars]) word = word.replace(char, '');
    return acc + (word.length === 0 ? words[idx].length : 0);
  }, 0);
};
