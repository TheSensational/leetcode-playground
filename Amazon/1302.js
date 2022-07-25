const deepestLeavesSum = (root) => {
  let sum = [];
  const dfs = (node, level) => {
    if (level === sum.length) sum[level] = node.val;
    else sum[level] += node.val;
    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return sum[sum.length - 1];
};
