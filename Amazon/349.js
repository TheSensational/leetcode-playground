var intersection = function (nums1, nums2) {
  const map = {};
  for (const n of nums1) {
    if (!map[n]) map[n] = 1;
  }
  return nums2.filter((n2) => {
    if (map[n2]) {
      delete map[n2];
      return true;
    } else {
      return false;
    }
  });
};
