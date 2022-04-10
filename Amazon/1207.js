var uniqueOccurrences = function (arr) {
  const map = {};
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  const values = Object.values(map);
  const uniqueValues = [...new Set(values)];
  return values.length === uniqueValues.length;
};
