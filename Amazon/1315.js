const sumEvenGrandparent = (root) => {
  let ans = 0;

  const dfs = (grandParent, parent, node) => {
    if (!node) return;

    if (grandParent.val % 2 === 0) ans += node.val;

    dfs(parent, node, node.left);
    dfs(parent, node, node.right);
  };

  if (root.left) {
    dfs(root, root.left, root.left.left);
    dfs(root, root.left, root.left.right);
  }

  if (root.right) {
    dfs(root, root.right, root.right.left);
    dfs(root, root.right, root.right.right);
  }

  return ans;
};
