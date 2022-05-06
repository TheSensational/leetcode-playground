const findComplement = (num) => {
  return parseInt(
    num
      .toString(2)
      .split('')
      .map((n) => +!+n)
      .join(''),
    2
  );
};
