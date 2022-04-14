var intersect = function (nums1, nums2) {
  let copy1 = nums1.sort((a, b) => a - b);
  let copy2 = nums2.sort((a, b) => a - b);
  let ans = [];
  while (copy1.length && copy2.length) {
    if (copy1[0] === copy2[0]) {
      ans.push(copy1.shift());
      copy2.shift();
    } else if (copy1[0] < copy2[0]) {
      copy1.shift();
    } else {
      copy2.shift();
    }
  }
  return ans;
};
