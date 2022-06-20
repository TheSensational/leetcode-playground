const minAddToMakeValid = (s) => {
  // let open = 0,
  //   close = 0;
  // for (const c of s) {
  //   if (c === '(') {
  //     open++;
  //   } else if (!open) {
  //     close++;
  //   } else {
  //     open--;
  //   }
  // }
  // return open + close;
  const stack = [];
  for (let s of S) {
    if (s === ')' && stack[stack.length - 1] === '(') stack.pop();
    else stack.push(s);
  }
  return stack.length;
};
