const findDuplicates = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) res.push(nums[i]);
  }
  return res;
};
