const allPossibleFBT = (number) => {
  if (number % 2 === 0) {
    return [];
  }

  let memo = new Array(number + 1);

  let helper = (n) => {
    if (memo[n]) {
      return memo[n];
    }

    if (n === 1) {
      return [new TreeNode(0)];
    }

    const trees = [];

    for (let i = 1; i < n; i += 2) {
      let lt = helper(i);
      let rt = helper(n - 1 - i);

      lt.forEach((ltr) => {
        rt.forEach((rtr) => {
          trees.push(new TreeNode(0, ltr, rtr));
        });
      });
    }

    memo[n] = trees;
    return trees;
  };

  return helper(number);
};
