let searchInsert = (nums, target) => {
  const len = nums.length;
  let left = 0,
    right = len - 1,
    ans = len;
  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
