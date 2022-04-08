var maxDistance = function (colors) {
  let end = colors.length - 1;
  if (colors[0] !== colors[end]) return end;
  let forwardPointer = 1,
    backwardPointer = end - 1;
  while (colors[0] === colors[forwardPointer]) {
    forwardPointer++;
  }
  while (colors[end] === colors[backwardPointer]) {
    backwardPointer--;
  }
  return Math.max(backwardPointer, end - forwardPointer);
};
