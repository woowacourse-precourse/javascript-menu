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
};

module.exports = Converter;
