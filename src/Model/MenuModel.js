const { RECOMMEND_DETAILS } = require("../Constant/Constant");
const GetRandomCategory = require("../Utils/GetRandomCategory");
const GetSamples = require("../Utils/GetSamples");
const ShuffleMenu = require("../Utils/ShuffleMenu");

class MenuModel {
  #coaches;
  #sample;

  constructor() {
    this.cantEat = [];
    this.coachesRecommends = [];
    this.#sample = GetSamples.get();
  }

  setCoaches(coaches) {
    this.#coaches = coaches;
  }

  getCoaches() {
    return this.#coaches;
  }

  setCantEat(cantEat) {
    this.cantEat = [...this.cantEat, cantEat];
  }

  getCoachesRecommends() {
    const arrCoaches = Array.from({ length: this.#coaches.length }).map(
      (value, index) => {
        let foodArr = [];
        for (let i = 0; i < 5; i++) {
          foodArr.push(this.#getMenu(foodArr, index));
        }
        return foodArr;
      }
    );
    return arrCoaches;
  }

  #getMenu(foodArr, index) {
    const category = this.#pickCategory(foodArr, index);
    const menu = this.#pickMenu(foodArr, index, category);
    const menuInfo = {
      category,
      menu,
    };
    return menuInfo;
  }

  #pickCategory(foodArr, index) {
    if (index < 2) {
      return GetRandomCategory.get();
    }
    return this.#duplicateCategory(foodArr);
  }

  #duplicateCategory(foodArr) {
    const category = GetRandomCategory.get();
    const duplicate = foodArr.filter((menuInfo) => {
      if (category === menuInfo.category) return true;
    });
    if (duplicate.length === 2) this.#duplicateCategory(foodArr);
    return category;
  }

  #pickMenu(foodArr, index, category) {
    const toStringCategory = this.#getCategory(category);
    const currentCategory = this.#sample[toStringCategory];
    const shuffledMenu = ShuffleMenu.get(
      Array.from({ length: 9 }, (v, i) => i + 1)
    );
    if (index === 0) {
      if (this.cantEat.includes(currentCategory[shuffledMenu[0]])) {
        this.#pickMenu(foodArr, index, category);
      }
      return currentCategory[shuffledMenu[0] - 1];
    }
    return this.#duplicateMenu(foodArr, shuffledMenu, toStringCategory);
  }

  #duplicateMenu(foodArr, shuffledMenu, toStringCategory) {
    const menu = this.#sample[toStringCategory][shuffledMenu[0]];
    if (this.cantEat.includes(menu))
      this.#reDuplicateMenu(foodArr, toStringCategory);
    let duplicate = false;
    for (let i = 0; i < foodArr.length; i++) {
      if (foodArr[i].menu === menu) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      return menu;
    }
    this.#reDuplicateMenu(foodArr, toStringCategory);
  }

  #reDuplicateMenu(foodArr, toStringCategory) {
    this.#duplicateMenu(
      foodArr,
      ShuffleMenu.get(Array.from({ length: 9 }, (v, i) => i + 1)),
      toStringCategory
    );
  }

  #getCategory(category) {
    switch (category) {
      case 1:
        return "일식";
      case 2:
        return "한식";
      case 3:
        return "중식";
      case 4:
        return "아시안";
      case 5:
        return "양식";
    }
  }
}

module.exports = MenuModel;
