var findNumbers = function (nums) {
  return nums.reduce((acc, cur) => acc + (Math.floor(Math.log10(cur)) % 2), 0);
  // let res = 0;
  // for (let num of nums) {
  //     num.toString().length % 2 === 0 ? res++ : '';
  // }
  // return res;
};
