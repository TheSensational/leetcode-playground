var minOperations = function (boxes) {
  let ans = [];
  let count = boxes.length;
  let hash = [];
  for (let i = 0; i < count; i++) {
    if (boxes[i] == 1) {
      hash.push(i);
    }
  }
  for (let i = 0; i < count; i++) {
    let steps = 0;
    for (let j = 0; j < hash.length; j++) {
      steps += Math.abs(hash[j] - i);
    }
    ans[i] = steps;
  }
  return ans;
};
