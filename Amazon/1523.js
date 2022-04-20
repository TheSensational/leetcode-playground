var countOdds = function (low, high) {
  return (
    (low % 2 === 0 && high % 2 === 0 ? 0 : 1) + Math.floor((high - low) / 2)
  );
};
