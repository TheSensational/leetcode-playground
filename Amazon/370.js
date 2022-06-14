const getModifiedArray = (len, updates) => {
  const ans = new Array(len).fill(0);
  for (let i = 0; i < updates.length; i++) {
    ans[updates[i][0]] += updates[i][2];
    if (updates[i][1] + 1 <= len - 1) {
      ans[updates[i][1] + 1] -= updates[i][2];
    }
  }
  let sum = 0;
  ans.forEach((e, idx) => {
    sum += e;
    ans[idx] = sum;
  });
  return ans;
};
