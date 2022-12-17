class Coach {
  #coachList;

  constructor() {}

  /**
   * 다리 건너기 게임을 관리하는 클래스
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
    if (inedibleMenus === "") { return; }
    const inedibleMenuList = inedibleMenus.split(",");
    this.#coachList.filter((coach) => {
      if (coach.name === coachName) {
        coach.inedibleMenuList = inedibleMenuList;
      }
    });
  }

  getCoachList() {
    return this.#coachList;
  }
}


module.exports = Coach;
