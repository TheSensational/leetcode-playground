const isCousins = (root, x, y) => {
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    let foundX = false;
    let foundY = false;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left && node.right) {
        // siblings
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        )
          return false;
      }

      // find x and y at the same level
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (foundX && foundY) return true;
  }
  return false;
};
