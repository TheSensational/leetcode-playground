var isMonotonic = function (nums) {
  return (
    nums.every((n, i) => i === 0 || n <= nums[i - 1]) ||
    nums.every((n, i) => i === 0 || n >= nums[i - 1])
  );
};
