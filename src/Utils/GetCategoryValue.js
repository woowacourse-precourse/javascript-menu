const Categories = require('./Categories');

const GetCategoryValue = {
  getCategoryValue(categoryNum) {
    if (categoryNum === 1) return Categories.일식;
    if (categoryNum === 2) return Categories.한식;
    if (categoryNum === 3) return Categories.중식;
    if (categoryNum === 4) return Categories.아시안;
    if (categoryNum === 5) return Categories.양식;
  } 
};

module.exports = GetCategoryValue;
