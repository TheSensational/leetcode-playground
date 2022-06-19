const triangularSum = (nums) => {
  // if (nums.length === 1) return nums[0];
  // const res = [];
  // for (let i = 0; i < nums.length - 1; i++) {
  //   res.push((nums[i] + nums[i + 1]) % 10);
  // }
  // return triangularSum(res);
  let j = nums.length;

  while (j > 1) {
    for (let i = 0; i < j - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    j--;
  }

  return nums[0];
};
