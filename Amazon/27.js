var removeElement = function (nums, val) {
  let startIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[startIdx++] = nums[i];
  }
  return startIdx;
};
