const { CATEGORIES } = require('./constants');

const convertCategory = (categoryIdxArr) => {
  const category = categoryIdxArr.map((idx) => CATEGORIES[idx - 1]);
  category.unshift('카테고리');
  return category;
};

module.exports = { convertCategory };
