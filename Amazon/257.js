var binaryTreePaths = function (root) {
  const ans = [];
  const dfs = (node, cur) => {
    if (!node) return;
    if (!node.left && !node.right) {
      ans.push(cur + node.val);
      return;
    }
    dfs(node.left, cur + node.val + '->');
    dfs(node.right, cur + node.val + '->');
  };
  dfs(root, '');
  return ans;
};
