var backspaceCompare = function (s, t) {
  return helper(s) === helper(t);
};

const helper = (str) => {
  const stack = [];
  for (s of str.split('')) {
    s !== '#' ? stack.push(s) : stack.pop();
  }
  return stack.join('');
};
