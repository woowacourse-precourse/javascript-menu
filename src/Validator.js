const Validator = {
  validateCoachName(coachList) {
    if (coachList.length < 2 || coachList.length > 5) {
      throw new Error("코치수 2명 이상 5명 이하");
    }
    if (coachList.some((name) => name.length < 2 || name.length > 4)) {
      throw new Error("이름 글자수 오류");
    }
  },
  validateDisableMenu(disablemenuList) {
    if (disablemenuList.length < 1 || disablemenuList.length > 2){
        throw new Error("음식 가짓수 오류")
    }
  }
};

module.exports = Validator;
