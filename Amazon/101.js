// var isSymmetric = function(root) {
//   if (!root) return true;
//   return isMirror(root.left, root.right);
// };

// const isMirror = (t1, t2) => {
//   if (!t1 && !t2) return true;
//   if (!t1 || !t2) return false;
//   if (t1.val !== t2.val) return false;
//   return isMirror(t1.left, t2.right) && (t1.right, t2.left);
// }

const isSymmetric = (root) => {
  const q = [root, root];
  while (q.length) {
    const [l, r] = [q.shift(), q.shift()];
    if (!l && !r) continue;
    if (!!l !== !!r || l.val !== r.val) return false;
    q.push(l.left, r.right, l.right, r.left);
  }
  return true;
};
