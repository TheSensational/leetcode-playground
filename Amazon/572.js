var isSubtree = function (root, subRoot) {
  return JSON.stringify(root).indexOf(JSON.stringify(subRoot)) !== -1;
};

// JSON.stringify(root):

// const obj = {
//   val: 3,
//   left: {
//     val: 4,
//     left: { val: 1, left: null, right: null },
//     right: { val: 2, left: null, right: null },
//   },
//   right: { val: 5, left: null, right: null },
// };
