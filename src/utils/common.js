const findIndexByCoachName = (coaches, name) => {
  const index = coaches.findIndex((c) => c.getName() === name);
  return index;
};

module.exports = { findIndexByCoachName };
