const CategoryList = require('../models/CategoryList');
const Coach = require('../models/Coach');
const CoachList = require('../models/CoachList');
const { createCategoryNum } = require('../utils/CreateCategoryNum');
const { Output, Input } = require('../views/View');

class Controller {
  #coachList = new CoachList();
  #coachNameList;
  #categoryList = new CategoryList();
  #count = 0;

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
    const validation = Coach.validateHateMenuList(hateMenuList);
    if (validation === false) return this.inputHateMenuList();

    const coach = this.#coachNameList.shift();
    if (this.#coachNameList.length > 0) return this.inputHateMenuList();
  }

  setRecommendation() {
    if (this.#count === 5) return this.printRecommendation();
    this.#count++;
    const categoryNum = createCategoryNum();
    const categoryMenuList =
      this.#categoryList.getCategoryMenuList(categoryNum);
    this.#coachList.recommendMenu(categoryMenuList);

    return this.setRecommendation();
  }

  printRecommendation() {}
}

module.exports = Controller;
