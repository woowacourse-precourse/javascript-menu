const { STYLE } = require('../constants/values');

const Convertor = {
  convertCategoryToPrintable(category) {
    const categoryList = category.map(v => {
      return STYLE[v];
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
