var mergeTwoLists = function (l1, l2) {
  const head = new ListNode(-1);

  let temp = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }

  temp.next = l1 === null ? l2 : l1;

  return head.next;
};
