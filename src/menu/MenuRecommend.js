class MenuRecommend {
  #categoryRecorder;
  #coachConstructor;
  #menuList;
  #menuRecommendRecorder;
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
  registerCoaches(coaches) {}
  registerHateFoods(foods) {}
  recommendMenus() {}
}

module.exports = MenuRecommend;
