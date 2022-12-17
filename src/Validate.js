const Constant = require('./Constant');
const Utils = require('./Utils');

class Validate {
  static crewName(nameList) {
    const list = Utils.stringConvertor(nameList);
    if (list.length > 5 || list.length < 2)
      throw new Error('코치는 두명이상 5명이하입니다.');
    list.forEach(element => {
      if (typeof element !== 'string')
        throw new Error(`[Error]${Constant.WRONG_NAME}`);
      if (element.includes(' '))
        throw new Error(`[Error]${Constant.WRONG_NAME}`);
      if (element.length < 2 || element.length > 4)
        throw new Error(`[Error]${Constant.WRONG_NAME}`);
    });
  }
}

module.exports = Validate;
