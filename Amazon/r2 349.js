const intersection = (nums1, nums2) => {
  const map = {};
  for (const n of nums1) {
    if (!map[n]) map[n] = 1;
  }
  return nums2.filter((n) => {
    if (map[n]) {
      delete map[n];
      return true;
    }
    return false;
  });
};
