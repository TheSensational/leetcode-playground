const bstFromPreorder = (preorder) => {
  let i = 0;
  const helper = (bound) => {
    if (i === preorder.length || preorder[i] > bound) return null;

    const num = preorder[i];
    const node = new TreeNode(num);
    i++;

    node.left = helper(node.val);
    node.right = helper(bound);

    return node;
  };

  const root = helper(Number.MAX_SAFE_INTEGER);

  return root;
};
