const SetCategory = require('../model/SetCategory');
const SetFood = require('../model/SetFood');

class Service {
  #catogoryList;
  #coachNotEatList;

  defineCoachNotEatList(notEatList) {
    this.#coachNotEatList = notEatList;
  }

  defineCoachFoodOfWeak() {
    const results = [];
    this.#coachNotEatList.forEach((list) => {
      const foods = new SetFood(list, this.#catogoryList).foodOfWeak();
      results.push(foods);
    });
    return results;
  }

  defineCategoryList() {
    this.#catogoryList = new SetCategory().makeCategoryList();
    return this.#catogoryList;
  }
}

module.exports = Service;
