var isPrefixOfWord = function (sentence, searchWord) {
  const sentences = sentence.split(' ');
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};
