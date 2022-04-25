var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }
  let cur = head;
  while (cur && cur.next) {
    if (cur.next.val === val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
};
