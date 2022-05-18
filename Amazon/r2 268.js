const missingNumber = (nums) => {
  const arr = new Array(nums.length + 1).fill(-1);
  for (const n of nums) arr[n] = 1;
  return arr.indexOf(-1);
};
