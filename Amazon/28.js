var strStr = function (haystack, needle) {
  if (!needle) return 0;
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};

const strStr = (haystack, needle) => {
  let len = haystack.length,
    len2 = needle.length;
  if (len2 === 0) return 0;
  for (let i = 0; i < len - len2 + 1; i++) {
    if (haystack.substring(i, i + len2) === needle) {
      return i;
    }
  }
  return -1;
};
