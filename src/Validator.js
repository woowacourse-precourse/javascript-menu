const Validator = {
  validateCoachName(coachList) {
    if (coachList.length < 2 || coachList.length > 5) {
      throw new Error("[Error] 코치수 2명 이상 5명 이하여야 합니다.");
    }
    if (coachList.some((name) => name.length < 2 || name.length > 4)) {
      throw new Error("[Error] 코치의 이름은 2~4글자 사이여야합니다.");
    }
  },
  validateDisableMenu(disablemenuList) {
    if (disablemenuList.length < 1 || disablemenuList.length > 2){
        throw new Error("[Error]음식 가짓수 오료가 발생했습니다.")
    }
  }
};

module.exports = Validator;
