function mySqrt(x) {
  let i = 0,
    j = x,
    ans = 0;
  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);
    if (mid * mid <= x) {
      ans = mid;
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return ans;
}
