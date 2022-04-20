var check = function (nums) {
  const origin = nums.slice().sort((a, b) => a - b);
  return nums.concat(nums).join(',').includes(origin.join(','));
};
