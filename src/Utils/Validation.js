const { ERROR_MESSAGE } = require("../Constant/Constant");

const Validation = {
  isCoachLength(coaches) {
    const coachesLength = coaches.length;
    if (coachesLength > 5 || coachesLength < 2)
      throw new Error(ERROR_MESSAGE.IS_COACH_LENGTH);
  },

  isCoachNameLength(userInput) {
    const coachNameLength = userInput.length;
    if (coachNameLength < 2 || coachNameLength > 4)
      throw new Error(ERROR_MESSAGE.IS_COACH_NAME_LENGTH);
  },

  isCoaches(coachesArr) {
    this.isCoachLength(coachesArr);
    coachesArr.forEach((coach) => {
      this.isCoachNameLength(coach);
    });
  },

  isCantEat(cantEatArr) {
    const cantEatArrLength = cantEatArr.length;
    if (cantEatArrLength < 1 || cantEatArrLength > 2)
      throw new Error(ERROR_MESSAGE.IS_CANT_EAT);
  },
};

module.exports = Validation;
