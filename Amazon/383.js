var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < magazine.length; i++) {
    ransomNote = ransomNote.replace(magazine[i], '');
  }
  return ransomNote.length === 0;
};
