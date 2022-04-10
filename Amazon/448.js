var findDisappearedNumbers = function (nums) {
  const set = new Set(nums),
    ans = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) ans.push(i);
  }
  return ans;
};
