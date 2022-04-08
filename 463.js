var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let ans = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!grid[row][col]) continue;
      ans += 4;
      if (row < rows - 1 && grid[row + 1][col]) ans--; // 下
      if (col < cols - 1 && grid[row][col + 1]) ans--; // 右
      if (row > 0 && grid[row - 1][col]) ans--; // 上
      if (col > 0 && grid[row][col - 1]) ans--; // 左
    }
  }
  return ans;
};
