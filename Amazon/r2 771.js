const numJewelsInStones = (jewels, stones) => {
  const jewelsArr = jewels.split('');
  let stonesArr = stones.split('');
  stonesArr = stonesArr.filter((s) => !jewelsArr.includes(s));
  return stones.length - stonesArr.length;
};
