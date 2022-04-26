var wordPatternMatch = function (pattern, s) {
  const n = pattern.length;
  const m = s.length;
  const map = new Map();
  const set = new Set();

  return backtrack(0, 0);

  function backtrack(pIdx, sIdx) {
    if (pIdx === n) return sIdx === m;
    if (sIdx === m) return pIdx === n;

    const pat = pattern.charAt(pIdx);

    if (map.has(pat)) {
      const word = map.get(pat);

      if (s.substring(sIdx, sIdx + word.length) != word) return false;

      return backtrack(pIdx + 1, sIdx + word.length);
    }

    let str = '';

    for (let i = sIdx; i < m; i++) {
      const char = s.charAt(i);
      str += char;

      if (!set.has(str)) {
        map.set(pat, str);
        set.add(str);

        if (backtrack(pIdx + 1, i + 1)) return true;

        map.delete(pat);
        set.delete(str);
      }
    }

    return false;
  }
};
