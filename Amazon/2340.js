const minimumSwaps = (nums) => {
  let maxIdx = nums.length - 1,
    minIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[maxIdx] < nums[nums.length - 1 - i]) {
      maxIdx = nums.length - 1 - i;
    }
    if (nums[minIdx] > nums[i]) minIdx = i;
  }
  return nums.length - 1 - maxIdx + minIdx - (minIdx > maxIdx ? 1 : 0);
};
