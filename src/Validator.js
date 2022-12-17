const { ERR_MSG, INFO } = require("./constants/constants");

const Validator = {
  validateCoach(coaches) {
    console.log(coaches);
    this.coachesLength(coaches);
    this.coachNameLength(coaches);
    this.coachDuplicated(coaches);
  },
  coachDuplicated(coaches) {
    let set = new Set(coaches);
    if (set.size != coaches.length) throw ERR_MSG.C_DUP_ERR;
  },

  coachesLength(coaches) {
    if (coaches.length < INFO.C_MIN || coaches.length > INFO.C_MAX)
      throw ERR_MSG.C_LEN_ERR;
  },

  coachNameLength(coaches) {
    coaches.forEach((name) => {
      if (name.length < INFO.C_NAME_MIN || name.length > INFO.C_NAME_MAX)
        throw ERR_MSG.C_NAME_ERR;
    });
  },
  validateHates(hates) {
    this.hatesValidLength(hates);
    this.hatesIsNaN(hates);
  },

  hatesValidLength(hates) {
    if (hates.length > INFO.HATE_MAX) throw ERR_MSG.HATE_ERR;
  },

  hatesIsNaN(hates) {
    hates.forEach((hate) => {
      if (!isNaN(hate)) throw ERR_MSG.HATE_NUM_ERR;
    });
  },
};

module.exports = Validator;
