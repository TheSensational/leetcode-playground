const lowestCommonAncestor = (p, q) => {
  const getDepth = (node) => {
    let depth = 0;
    while (node) {
      node = node.parent;
      depth++;
    }
    return depth;
  };

  let d1 = getDepth(p);
  let d2 = getDepth(q);

  while (d1 !== d2) {
    if (d1 > d2) {
      p = p.parent;
      d1--;
    } else {
      q = q.parent;
      d2--;
    }
  }

  while (p !== q) {
    p = p.parent;
    q = q.parent;
  }

  return p;
};
