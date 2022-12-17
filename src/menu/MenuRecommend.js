class MenuRecommend {
  #categoryRecorder;
  #coachConstructor;
  #menuList;
  #menuRecommendRecorder;
  #coaches = [];
  constructor(configuration) {
    const {
      categoryRecorder,
      coachConstructor,
      menuList,
      menuRecommendRecorder,
    } = configuration;

    this.#categoryRecorder = categoryRecorder;
    this.#coachConstructor = coachConstructor;
    this.#menuList = menuList;
    this.#menuRecommendRecorder = menuRecommendRecorder;
  }
  registerCoaches(coachesNames) {
    for (const name of coachesNames) {
      let coach = new this.#coachConstructor(name);
      this.#coaches.push(coach);
    }
  }
  registerHateFoods(name, foods) {
    const targetCoach = this.#coaches.find((coach) => coach.getName() === name);
    targetCoach.registerHateFood(foods.split(","));
  }
  recommendMenus() {
    const category = this.#menuList.getCategory();

    const moreThanTwice = this.#categoryRecorder.isMoreThanTwice(category);

    if (!moreThanTwice) {
      this.#categoryRecorder.writeRecord(category);
      let i = 0;
      while (i !== this.#coaches.length) {
        const targetCoach = this.#coaches[i];
        const menu = this.#menuList.getMenu(category);
        if (!targetCoach.canEat(menu)) continue;
        if (targetCoach.ateBefore(menu)) continue;
        targetCoach.writeEatingRecord(menu);
        i++;
      }
      return;
    }
    this.recommendMenus();
  }
}

module.exports = MenuRecommend;
