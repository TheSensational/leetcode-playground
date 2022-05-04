const reverseList = (head) => {
  let [prev, current] = [null, head];
  while (current) {
    // 先断掉next 再把当前节点变为前一个节点 再把当前节点后移
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
