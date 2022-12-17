const { FOODS } = require('../constants/FoodList');

const findFoodLocation = (input) => {
  const data = input.split(',');
  const result = [];

  data.forEach((value) => {
    for (let index = 0; index < FOODS.length; index += 1) {
      const find = FOODS[index].indexOf(value);
      if (find > -1) {
        result.push([index, find]);
        break;
      }
    }
  });

  return result;
};

module.exports = findFoodLocation;
