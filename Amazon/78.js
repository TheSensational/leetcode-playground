const subsets = (nums) => {
  let res = [[]],
    helper = [];
  for (let num of nums) {
    helper = [];
    for (let entry of res) {
      helper.push([...entry, num]);
    }
    res.push(...helper);
  }
  return res;
};
