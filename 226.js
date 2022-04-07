var invertTree = function (root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
};
