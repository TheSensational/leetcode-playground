var SparseVector = function (nums) {
  this.vector = nums;
};

SparseVector.prototype.dotProduct = function (vec) {
  return this.vector.reduce((acc, val, index) => {
    return (acc = acc + val * vec.vector[index]);
  }, 0);
};
