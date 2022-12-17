const isCorrectCoachsLength = (coachNames) => {
  const length = coachNames.length;
  if (2 > length) {
    throw new Error("[ERROR] 코치는 최소 2명");
  }
  if (5 < length) {
    throw new Error("[ERROR] 코치는  최대 5명");
  }
};

const isCorrectCoachNameLength = (coachNames) => {
  coachNames.forEach((coachName) => {
    const length = coachName.length;
    if (2 > length) {
      throw new Error("[ERROR] 코치의 이름은 최소 2글자");
    }
    if (length > 4) {
      throw new Error("[ERROR] 코치의 이름은 최대 4글자.");
    }
  });
};

const Validation = {
  coachNames: (inputCoachNames) => {
    const coachNames = inputCoachNames.split(",");
    isCorrectCoachsLength(coachNames);
    isCorrectCoachNameLength(coachNames);
  },
  notEatMenu: (inputNotEatMenu) => {
    const notEatMenu = inputNotEatMenu.split(",");
  },
};

module.exports = Validation;
