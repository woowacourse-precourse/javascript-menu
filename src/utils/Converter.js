const { CATEGORY, FOOD_NAMES } = require('../Constants');
const foodNames = [, ...Object.values(FOOD_NAMES)];

const Converter = {
  convertNumberToCategory(number) {
    return Object.values(CATEGORY)[number];
  },

  convertToStringArray(names) {
    return names.split(',');
  },

  convertNumberToFoodName(category, number) {
    return foodNames[category][number];
  },

  convertCategoryToNumber(category) {
    const { jp, kr, ch, asian, western } = CATEGORY;
    switch (category) {
      case jp:
        return 1;
      case kr:
        return 2;
      case ch:
        return 3;
      case asian:
        return 4;
      case western:
        return 5;
    }
  },
};

module.exports = Converter;
