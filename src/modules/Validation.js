const Validation = {
  validateGroup(stringOfCoaches) {
    if (!stringOfCoaches.includes(',')) throw new Error('!');
    const coaches = stringOfCoaches.split(',');
    if (coaches.length > 5) throw new Error('!');
    return;
  },
  validateName(name) {
    if (name.length < 2 || name.length > 4) throw new Error('!');
    return;
  },
  validateDuplicateCategory(categories) {
    const board = {};
    for (const category of categories) {
      board[category] = (board[category] || 0) + 1;
    }
    for (let [category, count] of Object.entries(board)) {
      if (count > 2) return false;
    }
    return true;
  },
};

module.exports = Validation;
