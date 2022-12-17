const Coach = require('../Model/Coach');
const CategoryGenerator = require('../Utils/CategoryGenerator');
const Shuffle = require('../Utils/Shuffle');

class CoachGroup {
  #coachGroup = [];
  #dayCategories = [];
  
  constructor(coachesName) {
    this.bindCoach(coachesName);
    this.generateCategory();
    this.#dayCategories.forEach((categoryNum) => {
      this.#coachGroup.forEach((coach) => {
        coach.getEatMenu(Shuffle.shuffle(categoryNum));
      });
    })
  }

  bindCoach(coachesName) {
    const coaches = coachesName.split(',');
    coaches.forEach((coachName) => {
      this.#coachGroup.push(new Coach(coachName));
    });
  }

  generateCategory() {
    for (let i = 0; i < 5; i++) {
      let category = CategoryGenerator.generate();
      if (this.checkCategoryOverlap(category)) {
        this.#dayCategories.push(category);
      }
    }
  }

  checkCategoryOverlap(category) {
    const overlapCategory = this.#dayCategories.filter((el) => el === category);
    if (overlapCategory.length !== 2) return true; 
    this.#dayCategories.push(CategoryGenerator.generate());
  }

  getCoachGroup() {
    return this.#coachGroup;
  }

  getDayCategories() {
    return this.#dayCategories;
  }
};

module.exports = CoachGroup;
