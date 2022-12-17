const Validator = {
  isValidNameLength(name) {
    return name.length >= 2 && name.length <= 4;
  },

  isValidCoachNumber(coachs) {
    return coachs.length >= 2 && coachs.length <= 5;
  },

  isValidDislikeFoodsLength(dislikeFoods) {
    return dislikeFoods.length <= 2;
  },
};

module.exports = Validator;
