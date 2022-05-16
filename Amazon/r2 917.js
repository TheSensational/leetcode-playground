const reverseOnlyLetters = (s) => {
  const chars = [];
  return s
    .split('')
    .map((c) => {
      const code = c.charCodeAt();
      if (code < 65 || (code > 90 && code < 97) || code > 122) return c;
      chars.push(c);
      return null;
    })
    .map((c) => (c ? c : chars.pop()))
    .join('');
};
