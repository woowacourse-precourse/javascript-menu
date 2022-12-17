const { CATEGORY } = require('../../constants');

class Result {
  constructor(coaches, categories) {
    this.coaches = coaches;
    this.categories = categories;
  }

  getCategories() {
    return this.categories.map((categoryNumber) => CATEGORY[categoryNumber]);
  }
}

module.exports = Result;
