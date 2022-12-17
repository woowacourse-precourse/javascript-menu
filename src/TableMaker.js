const { TABLE } = require('./lib/constants');
const RandomGenerator = require('./RandomGenerator');

const pattern = /(\]\[)/g;

const TableMaker = {
  makeResultTable(coachesMap) {
    const categoryList = this.getCategoryList();
    const categoryTable = this.makeCategoryTable(categoryList);

    const foodList = [...coachesMap.keys()]
      .map((coach) => this.makeFoodList([coach, coachesMap.get(coach), categoryList]));
    const foodTable = foodList.map((food) => this.makeFoodTable(food));

    return { categoryTable, foodTable };
  },

  getCategoryList() {
    const categoryList = [];

    while (categoryList.length < 5) {
      const category = RandomGenerator.category();

      if (!categoryList.includes(category)
          || !categoryList.slice(
            categoryList.indexOf(category) + 1,
          ).includes(category)) { categoryList.push(category); }
    }

    categoryList.unshift(TABLE.CATEGORY);

    return categoryList;
  },

  makeCategoryTable(categoryList) {
    const categoryTable = [];

    categoryList.forEach((category) => categoryTable.push(`[ ${category} ]`));

    return categoryTable.join('').replace(pattern, '|');
  },

  makeFoodList([coach, info, categoryList]) {
    const { hateList } = info;
    const foodList = [`[ ${coach} ]`];

    categoryList.slice(1).forEach((category) => {
      const food = RandomGenerator.menu(category);
      if (!foodList.includes(food) && !hateList.includes(food)) { foodList.push(`[ ${food} ]`); }
    });

    return foodList;
  },

  makeFoodTable(food) {
    return food.join('').replace(pattern, '|');
  },
};

module.exports = TableMaker;
