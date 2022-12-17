const Exception = require('../utils/Exception');

class Coach {
  #coachList;

  constructor() {}

  /**
   * 입력받은 이름을 통해 코치 리스트를 만드는 매서드
   * @param {string} coachNames ',로 구분된 코치 이름 문자'
   * @return {{name,inedibleMenuList,recommendedMenuList}[]}
   */
  createCoachList(coachNames) {
    const coachList = [];
    const coachNameList = coachNames.split(",");
    coachNameList.forEach((coachName) => {
      coachList.push({
        name: coachName,
        inedibleMenuList: [],
        recommendedMenuList: [],
      });
    });
    this.#coachList = coachList;
  }

  inputInedibleMenu(coachName, inedibleMenus) {
    if (inedibleMenus === "") {
      return;
    }
    const inedibleMenuList = inedibleMenus.split(",");
    this.#coachList.filter((coach) => {
      if (coach.name === coachName) {
        coach.inedibleMenuList = inedibleMenuList;
      }
    });
    console.log(coachName, inedibleMenus, "here");
    return;
  }

  inputRecommendedMenu(coachName, recommendedMenu) {
    this.#coachList.filter((coach) => {
      if (coach.name === coachName) {
        coach.recommendedMenuList.push(recommendedMenu);
      }
    });
  }

  getCoachList() {
    return this.#coachList;
  }
}

module.exports = Coach;
