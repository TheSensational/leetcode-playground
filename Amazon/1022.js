var sumRootToLeaf = function (root) {
  const tree = [];
  const iterate = (node, str) => {
    if (!node) return null;
    const binaryStr = str + node.val;
    if (!node.left && !node.right) {
      tree.push(binaryStr);
    }
    iterate(node.left, binaryStr);
    iterate(node.right, binaryStr);
  };
  iterate(root, '');
  return tree.reduce((sum, cur) => (sum += parseInt(cur, 2)), 0);
};
