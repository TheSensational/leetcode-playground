const maxDistance = (colors) => {
  let end = colors.length - 1;
  if (colors[0] !== colors[end]) return end;
  let forwardPtr = 1,
    backwardPtr = end - 1;
  while (colors[0] === colors[forwardPtr]) {
    forwardPtr++;
  }
  while (colors[end] === colors[backwardPtr]) {
    backwardPtr--;
  }
  return Math.max(backwardPtr, end - forwardPtr);
};
