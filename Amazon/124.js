const maxPathSum = (root) => {
  let max = Number.MIN_SAFE_INTEGER;

  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    left = left < 0 ? 0 : left;
    right = right < 0 ? 0 : right;
    max = Math.max(max, left + right + node.val);
    return Math.max(left + node.val, right + node.val);
  };

  dfs(root);
  return max;
};
