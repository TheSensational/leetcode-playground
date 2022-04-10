var reverseOnlyLetters = function (s) {
  const stack = [];
  return (
    s
      .split('')
      .map((val) => {
        const code = val.charCodeAt(0);
        if (code < 65 || (code > 90 && code < 97) || code > 122) return val;
        stack.push(val);
        return null;
      })
      // push pop 颠倒顺序
      .map((val) => (val === null ? stack.pop() : val))
      .join('')
  );
};
