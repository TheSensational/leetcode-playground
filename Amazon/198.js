var rob = function (nums) {
  // dp bottom-up

  // base cases
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let oneGap = nums[0];
  let zeroGap = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const maxCurrent = Math.max(nums[i] + oneGap, zeroGap);
    oneGap = zeroGap;
    zeroGap = maxCurrent;
  }

  return zeroGap;
};
