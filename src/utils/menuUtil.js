const { CATEGORIES } = require('./constants');

const convertCategory = (categoryIdxArr) => {
  const category = categoryIdxArr.map((idx) => CATEGORIES[idx - 1]);
  category.unshift('카테고리');
  return category;
};

const combineCoachMenu = (coach, menu) => {
  for (const idx in coach) {
    menu[idx].unshift(coach[idx]);
  }
  return menu;
};

const joinResultMessage = (arr) => {
  return '[ ' + `${arr.join(' | ')}` + ' ]';
};

module.exports = { convertCategory, combineCoachMenu, joinResultMessage };
