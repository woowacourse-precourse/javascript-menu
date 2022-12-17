const Vaildator = {
  isVaildNameLength(name) {
    return name.length >= 2 && name.length <= 4;
  },

  isVaildCoachNumber(coachs) {
    return coachs.length >= 2 && coachs.length <= 5;
  },

  isVaildDislikeFoodsLength(dislikeFoods) {
    return dislikeFoods.length <= 2;
  },
};

module.exports = Vaildator;
