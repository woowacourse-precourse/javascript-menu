const MENUS = require('../constant/menus');

const MenuUtil = {
  findCategoryByFoodName(foodname) {
    const foodCategorys = Object.keys(MENUS);
    for (const category of foodCategorys) {
      if (MENUS[category].includes(foodname)) {
        return category;
      }
    }
  },
};

module.exports = MenuUtil;
