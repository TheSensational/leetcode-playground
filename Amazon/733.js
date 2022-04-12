const floodFill = function (image, sr, sc, newColor) {
  dfs(image, sr, sc, newColor, image[sr][sc]);
  return image;
};

const dfs = (image, sr, sc, newColor, originColor) => {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;

  if (image[sr][sc] !== originColor || image[sr][sc] === newColor) return;

  image[sr][sc] = newColor;

  dfs(image, sr - 1, sc, newColor, originColor);
  dfs(image, sr, sc + 1, newColor, originColor);
  dfs(image, sr + 1, sc, newColor, originColor);
  dfs(image, sr, sc - 1, newColor, originColor);
};
