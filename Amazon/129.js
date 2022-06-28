const sumNumbers = (root) => {
  if (!root) return 0;
  let res = 0;
  const dfs = (node, sum) => {
    sum = sum * 10 + node.val;
    if (!node.left && !node.right) {
      res += sum;
      return;
    }
    node.left && dfs(node.left, sum);
    node.right && dfs(node.right, sum);
  };
  dfs(root, 0);
  return res;
};
