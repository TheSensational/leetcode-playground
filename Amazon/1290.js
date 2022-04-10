var getDecimalValue = function (head) {
  let cur = head,
    str = '';
  while (cur) {
    str += cur.val;
    cur = cur.next;
  }
  return parseInt(str, 2);
};
