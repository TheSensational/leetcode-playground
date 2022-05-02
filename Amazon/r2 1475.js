const finalPrices = (prices) => {
  return prices.map((price, idx) => {
    const discount = prices.slice(idx + 1).find((p) => p <= price) || 0;
    return price - discount;
  });
};
