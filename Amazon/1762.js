const findBuildings = (heights) => {
  let maxHeight = -1,
    ans = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    if (maxHeight < heights[i]) {
      ans.push(i);
      maxHeight = heights[i];
    }
  }
  return ans.reverse();
};
