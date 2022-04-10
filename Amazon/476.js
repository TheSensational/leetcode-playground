var findComplement = function (num) {
  return parseInt(
    num
      .toString(2)
      .split('')
      .map((s) => +!+s)
      .join(''),
    2
  );
};

//   Manipulation starts from the right side, so:
//  '+' converts a string to number
//  '!' converts respective boolean and then its negation
//  '+' again boolean to number
