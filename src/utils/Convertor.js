const { FOOD } = require('../constants/values');

const Convertor = {
  convertCategoryToPrintable(category) {
    const categoryList = category.map(v => {
      switch (v) {
        case FOOD.japan:
          return '일식';
        case FOOD.korea:
          return '한식';
        case FOOD.china:
          return '중식';
        case FOOD.asian:
          return '아시안';
        case FOOD.western:
          return '양식';
      }
    });

    return `[ 카테고리 | ${categoryList.join(' | ')} ]`;
  },
  convertResultToPrintable(names, result) {
    return names
      .map((coach, i) => `[ ${coach} | ${result[i].join(' | ')} ]`)
      .join('\n');
  },
};

module.exports = Convertor;
