const UserError = require('../util/UserError');
const Error = require('../constant/ErrorMessage');

class NoMenuList {
  #noMenuList;

  constructor(noMenuList) {
    console.log('1', noMenuList);
    this.#noMenuList = noMenuList.split(',');
    this.validate();
    console.log('2', noMenuList);
  }

  validate() {
    this.checkMenuNumber();
    this.checkKorean();
  }

  checkMenuNumber() {
    if (this.#noMenuList.length < 0 || this.#noMenuList.length > 2) {
      throw new UserError(Error.MENU_NUMBER);
    }
  }

  checkKorean() {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    this.#noMenuList.forEach(menu => {
      if (regexp.test(menu)) throw new UserError(Error.KOREAN);
    });
  }
}

module.exports = NoMenuList;
