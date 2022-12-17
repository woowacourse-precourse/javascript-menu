const CategoryNumberMaker = require('./CategoryNumberMaker');
const { CATEGORY } = require('../Util/Constants');

const CategoryMaker = {
  JAPANESE_NUMBER: 1,
  KOREAN_NUMBER: 2,
  CHINESE_NUMBER: 3,
  ASIAN_NUMBER: 4,
  ITALIAN_NUMBER: 5,

  makeCategory() {
    const category = [];
    const randomNumbers = CategoryNumberMaker.makeRandomFiveNumbers();
    randomNumbers.forEach((number) => {
      if (number === this.JAPANESE_NUMBER) category.push(CATEGORY.JAPANESE);
      if (number === this.KOREAN_NUMBER) category.push(CATEGORY.KOREAN);
      if (number === this.CHINESE_NUMBER) category.push(CATEGORY.CHINESE);
      if (number === this.ASIAN_NUMBER) category.push(CATEGORY.ASIAN);
      if (number === this.ITALIAN_NUMBER) category.push(CATEGORY.ITALIAN);
    });
    return category;
  },
};

module.exports = CategoryMaker;
