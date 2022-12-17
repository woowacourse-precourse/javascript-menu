const Constant = require('./Constant');
const Utils = require('./Utils');

class Validate {
  static crewName(nameList) {
    const list = Utils.stringConvertor(nameList);
    list.forEach(element => {
      if (typeof element !== 'string')
        throw new Error(`[Error]${Constant.WRONG_NAME}`);
      if (element.includes(' '))
        throw new Error(`[Error]${Constant.WRONG_NAME}`);
    });
  }
}

module.exports = Validate;
