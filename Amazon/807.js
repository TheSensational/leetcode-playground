const maxIncreaseKeepingSkyline = (grid) => {
  const n = grid.length;
  const rowMax = new Array(n).fill(0);
  const colMax = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j]);
      colMax[j] = Math.max(colMax[j], grid[i][j]);
    }
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += Math.min(rowMax[i], colMax[j]) - grid[i][j];
    }
  }
  return res;
};
