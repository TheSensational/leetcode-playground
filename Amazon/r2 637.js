const averageOfLevels = (root) => {
  let q = [root],
    ans = [];
  while (q.length) {
    let qlen = q.length,
      total = 0;
    for (let i = 0; i < qlen; i++) {
      let current = q.shift();
      total += current.val;
      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
    }
    ans.push(total / qlen);
  }
  return ans;
};
