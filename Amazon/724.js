var pivotIndex = function (nums) {
  let sum = 0,
    leftsum = 0;
  nums.forEach((n) => (sum += n));
  for (let i = 0; i < nums.length; i++) {
    if (leftsum === sum - leftsum - nums[i]) return i;
    leftsum += nums[i];
  }
  return -1;
};
