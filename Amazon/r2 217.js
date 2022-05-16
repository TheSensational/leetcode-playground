const containsDuplicate = (nums) => {
  // return nums.length !== [...new Set(nums)].length;
  return nums.length !== new Set(nums).size;
};
