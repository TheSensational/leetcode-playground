const moveZeroes = (nums) => {
  let ptr = 0;
  for (let i in nums) {
    if (nums[i] !== 0) {
      [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
      ptr++;
    }
  }
  return nums;
};
