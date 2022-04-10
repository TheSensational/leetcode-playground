var maxDepth = function (root) {
  let left_height = 0,
    right_height = 0;
  if (!root) return 0;
  left_height = maxDepth(root.left);
  right_height = maxDepth(root.right);
  return Math.max(left_height, right_height) + 1;
};
