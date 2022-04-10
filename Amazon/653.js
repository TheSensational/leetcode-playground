var findTarget = function (root, k) {
  const set = new Set();
  const dfs = (root) => {
    if (!root) return false;
    if (set.has(k - root.val)) return true;
    set.add(root.val);
    return dfs(root.left) || dfs(root.right);
  };
  return dfs(root);
};
