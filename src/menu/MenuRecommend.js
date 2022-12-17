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
  registerHateFoods(foods) {}
  recommendMenus() {}
}

module.exports = MenuRecommend;
