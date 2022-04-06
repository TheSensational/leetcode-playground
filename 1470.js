var shuffle = function (nums, n) {
  let len = nums.length,
    arr1 = nums.splice(0, n),
    arr2 = nums,
    ans = 0,
    res = [];
  while (res.length < len) {
    res.push(arr1[ans], arr2[ans]);
    ans++;
  }
  return res;
};
