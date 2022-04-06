var finalPrices = function (prices) {
  return prices.map((price, index) => {
    const discount = prices.slice(index + 1).find((p) => p <= price) || 0;
    return price - discount;
  });
};
