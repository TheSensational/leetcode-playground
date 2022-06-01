const dfs = (list, depth) => {
  let sum = 0,
    len = list.length;
  for (let i = 0; i < len; i++) {
    if (list[i].isInteger()) {
      sum += list[i].getInteger() * depth;
    } else {
      sum += dfs(list[i].getList(), depth + 1);
    }
  }
  return sum;
};

const depthSum = (nestedList) => {
  return dfs(nestedList, 1);
};
