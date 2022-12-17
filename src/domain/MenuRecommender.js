const { Random } = require('@woowacourse/mission-utils');
const { MENU, WEEK, CATEGORY, MARK } = require('../constants/Constants');

const MenuRecommender = class {
  #category;

  recommend(names, hateMenus) {
    const weekCategory = this.#initWeekCategory();
    return names.reduce((recommendList, name, i) => {
      recommendList[`${name}`] = this.#personalRecommend(
        weekCategory,
        hateMenus[i]
      );
      return recommendList;
    }, {});
  }

  #personalRecommend(weekCategory, hateMenus) {
    const menuArr = this.#initMenuArr();

    return weekCategory.reduce((menus, category) => {
      const categoryMenus = menuArr[category - 1];
      const numArr = this.#generateArr(categoryMenus.length);

      let menuNumber = Random.shuffle(numArr)[0];
      let menu = categoryMenus[menuNumber];

      while (1) {
        if (this.#isValidMenu(menus, hateMenus, menu)) {
          menus.push(menu);
          break;
        }
        menuNumber = Random.shuffle(numArr)[0];
        menu = categoryMenus[menuNumber];
      }

      return menus;
    }, []);
  }

  #initMenuArr() {
    return Object.entries(MENU).map(([_, category]) =>
      category.split(`${MARK.rest} `)
    );
  }

  #isValidMenu(menus, hateMenus, menu) {
    return (
      !this.#isAlreadyEaten(menus, menu) &&
      !this.#isHateThisFood(hateMenus, menu)
    );
  }

  #isHateThisFood(hateMenus, menu) {
    return hateMenus.includes(menu);
  }

  #isAlreadyEaten(menus, menu) {
    return menus.includes(menu);
  }

  #initWeekCategory() {
    const category = [];

    while (category.length < WEEK.size) {
      const selected = Random.pickNumberInRange(1, CATEGORY.size);
      if (!this.#isMoreThan2(category, selected)) category.push(selected);
    }
    return category;
  }

  #isMoreThan2(category, selected) {
    const duplicatedCount = category.filter(
      (already) => already === selected
    ).length;
    return duplicatedCount >= CATEGORY.max;
  }

  #generateArr(size) {
    return Array(size)
      .fill(0)
      .map((_, i) => i);
  }
};

// const a = new MenuRecommender();
// console.log(
//   a.recommend(
//     ['세현', '곰지'],
//     [
//       ['김치찌개', '제육볶음'],
//       ['스파게티', '라자냐'],
//     ]
//   )
// );
module.exports = MenuRecommender;
