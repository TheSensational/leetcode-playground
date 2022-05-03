const maxDepth = (root) => {
  let left_depth = 0,
    right_depth = 0;
  if (!root) return 0;
  left_depth = maxDepth(root.left);
  right_depth = maxDepth(root.right);
  return Math.max(left_depth, right_depth) + 1;
};
