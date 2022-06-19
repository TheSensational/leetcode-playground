// 15.38% 56.04%
// const getAllElements = (root1, root2) => {
//   const ans = [];
//   const helper = (root) => {
//     if (!root) return;
//     ans.push(root.val);
//     helper(root.left);
//     helper(root.right);
//   };
//   helper(root1);
//   helper(root2);
//   return ans.sort((a, b) => a - b);
// };

// 28.57% 23.63%
const getAllElements = (root1, root2) => {
  const arr1 = [],
    arr2 = [];

  const inorderTra = (node, arr) => {
    if (!node) return;
    inorderTra(node.left, arr);
    arr.push(node.val);
    inorderTra(node.right, arr);
  };

  inorderTra(root1, arr1);
  inorderTra(root2, arr2);

  const res = [];
  let idx1 = 0,
    idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    arr1[idx1] < arr2[idx2] ? res.push(arr1[idx1++]) : res.push(arr2[idx2++]);
  }

  while (idx1 < arr1.length) res.push(arr1[idx1++]);
  while (idx2 < arr2.length) res.push(arr2[idx2++]);

  return res;
};
