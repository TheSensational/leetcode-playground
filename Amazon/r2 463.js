const islandPerimeter = (grid) => {
  const row = grid.length,
    col = grid[0].length;
  let ans = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) continue;
      ans += 4;
      if (i < row - 1 && grid[i + 1][j]) ans--;
      if (j < col - 1 && grid[i][j + 1]) ans--;
      if (i > 0 && grid[i - 1][j]) ans--;
      if (j > 0 && grid[i][j - 1]) ans--;
    }
  }
  return ans;
};
