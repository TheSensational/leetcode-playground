const defangIPaddr = (address) => {
  return address
    .split('')
    .map((addr) => {
      if (addr === '.') {
        return '[.]';
      } else {
        return addr;
      }
    })
    .join('');
};
