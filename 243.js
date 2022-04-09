var shortestDistance = function (wordsDict, word1, word2) {
  let ptr = 0,
    idx1 = -1,
    idx2 = -1,
    ans = Infinity;
  while (ptr < wordsDict.length) {
    if (wordsDict[ptr] === word1) idx1 = ptr;
    if (wordsDict[ptr] === word2) idx2 = ptr;
    if (idx1 > -1 && idx2 > -1) ans = Math.min(ans, Math.abs(idx1 - idx2));
    ptr++;
  }
  return ans;
};
