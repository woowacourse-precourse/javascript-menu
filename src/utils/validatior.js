const isVlaidCoachNames = (coches) => coches.every((name) => name.length >= 2 && name.length <= 4);

module.exports = {
  isVlaidCoachNames,
};
