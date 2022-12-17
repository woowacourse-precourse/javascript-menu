const UserError = require('../util/UserError');
const Error = require('../constant/ErrorMessage');

class CoachNameList {
  #nameList;

  constructor(nameList) {
    this.#nameList = nameList.split(',');
    this.validate();
  }

  validate() {
    this.checkCoachNumber();
    this.checkNameLength();
    this.checkKorean();
  }

  checkCoachNumber() {
    if (this.#nameList.length < 2 || this.#nameList.length > 6) {
      throw new UserError(Error.COACH_NUMBER);
    }
  }

  checkNameLength() {
    const wrongLengthName = this.#nameList.filter(name => {
      if (name.length < 2 || name.length > 4);
    });
    if (wrongLengthName.length > 0) {
      throw new UserError(Error.NAME_LENGTH);
    }
  }

  checkKorean() {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    this.#nameList.forEach(name => {
      if (regexp.test(name)) throw new UserError(Error.KOREAN);
    });
  }
}

module.exports = CoachNameList;
