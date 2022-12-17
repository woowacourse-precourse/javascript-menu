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
};

module.exports = Validation;
