const { ERR_MSG } = require("./constants/constants");

const Validator = {
  validateCoach(coaches) {
    this.coachesLength(coaches);
    this.coachNameLength(coaches);
  },

  coachesLength(coaches) {
    if (coaches.length < 2 || coaches > 5) throw ERR_MSG.C_LEN_ERR;
  },

  coachNameLength(coaches) {
    coaches.forEach((name) => {
      if (name.length < 2 || name.length > 4) throw ERR_MSG.NAME_ERR;
    });
  },
};

module.exports = Validator;
