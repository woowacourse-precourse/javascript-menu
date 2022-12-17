const { ERROR_MESSAGE } = require("../constant/ErrorMessage");

class Coach {
  #coaches;

  constructor(names) {
    this.validate(names);
  }

  getCoaches() {
    return this.#coaches;
  }

  validate(names) {
    const coaches = names.split(",");

    this.isValidPersonnel(coaches);
    this.isValidNameLength(coaches);

    this.#coaches = coaches;
  }
  isValidPersonnel(coaches) {
    if (!(coaches.length >= 2 && coaches.length <= 5)) {
      throw new Error(ERROR_MESSAGE.invalidPersonnel);
    }
  }
  isValidNameLength(coaches) {
    coaches.forEach((name) => {
      if (!(name.length >= 2 && name.length <= 4)) {
        throw new Error(ERROR_MESSAGE.invalidNameLength);
      }
    });
  }
}

module.exports = Coach;
