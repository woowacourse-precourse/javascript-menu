const CategoryList = require('../models/CategoryList');
const Coach = require('../models/Coach');
const CoachList = require('../models/CoachList');
const { Output, Input } = require('../views/View');

class Controller {
  #coachList = new CoachList();
  #coachNameList;
  #categoryList = new CategoryList();

  constructor(categoryList) {
    this.#categoryList.addCategoryList(categoryList);
  }

  init() {
    Output.printInit();
    this.inputCoachNameList();
  }

  inputCoachNameList() {
    Input.readCoachNameList((coachNameList) => {
      this.checkCoachNameList(coachNameList);
    });
  }

  checkCoachNameList(coachNameList) {
    const validation = Coach.validateCoachNameList(coachNameList);
    if (validation === false) return this.inputCoachNameList();
    this.makeCoach(coachNameList);
    this.#coachNameList = this.#coachList.getCoachNameList();
    this.inputHateMenuList();
  }

  makeCoach(coachNameList) {
    coachNameList.split(',').forEach((coachName) => {
      this.#coachList.addCoach(coachName);
    });
  }

  inputHateMenuList() {
    Input.readHateMenuList(this.#coachNameList[0], (hateMenuList) => {
      this.checkHateMenuList(hateMenuList);
    });
  }

  checkHateMenuList(hateMenuList) {
    const coach = this.#coachNameList.shift();
    if (this.#coachNameList.length > 0) return this.inputHateMenuList();
  }
}

module.exports = Controller;
