const suggestedProducts = (products, searchWord) => {
  products.sort();
  const ans = [];
  for (let i = 0; i < searchWord.length; i++) {
    products = products.filter((p) => searchWord[i] === p[i]);
    ans.push(products.slice(0, 3));
  }
  return ans;
};
