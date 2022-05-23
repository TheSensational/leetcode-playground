const maximumWealth = (accounts) => {
  let maxWealth = 0;
  for (i = 0; i < accounts.length; i++) {
    let wealth = accounts[i].reduce((wealth, bank) => wealth + bank);
    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }
  return maxWealth;
};
