var averageOfLevels = function (root) {
  const ans = [],
    count = [];
  const helper = (node, i) => {
    if (!count[i]) count[i] = 0;
    if (!ans[i]) ans[i] = 0;
    count[i]++;
    ans[i] += node.val;
    if (node.left) helper(node.left, i + 1);
    if (node.right) helper(node.right, i + 1);
  };
  helper(root, 0);
  for (let i = 0; i < ans.length; i++) {
    ans[i] = ans[i] / count[i];
  }
  return ans;
};
