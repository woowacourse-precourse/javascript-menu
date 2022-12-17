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

  isCoaches(userInput) {
    const coaches = userInput.split(",");
    this.isCoachLength(coaches);
    coaches.forEach((coach) => {
      this.isCoachNameLength(coach);
    });
  },
};

module.exports = Validation;
