const numberOfBeams = (bank) => {
  return (
    bank
      // 每个字符串里'1'的个数
      .map((str) => str.split('0').join('').length)
      // 去掉全'0'的
      .filter((val) => val !== 0)
      .reduce((acc, cur, idx, arr) => acc + cur * (arr[idx + 1] || 0), 0)
  );
};
