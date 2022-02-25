const isValid = s => {
  if (s.length === 1) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (['{', '[', '('].includes(s[i])) {
      stack.unshift(s[i]);
    } else if (['{}', '[]', '()'].includes(stack[0] + s[i])) {
      stack.shift();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
