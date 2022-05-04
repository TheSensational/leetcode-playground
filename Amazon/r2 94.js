const inorderTraversal = (root) => {
  const ans = [];
  const traverse = (node) => {
    if (!node) return null;
    traverse(node.left);
    ans.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return ans;
};
