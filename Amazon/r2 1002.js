const commonChars = (words) => {
  let ans = [],
    word = words[0];
  for (const s of word) {
    if (words.every((word) => word.includes(s))) {
      words = words.map((word) => word.replace(s, ''));
      ans.push(s);
    }
  }
  return ans;
};
