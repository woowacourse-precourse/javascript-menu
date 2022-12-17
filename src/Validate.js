const Constant = require('./Constant');
const Utils = require('./Utils');

class Validate {
  static crewName(nameList) {
    const list = Utils.stringConvertor(nameList);
    list.foreach(item => {
      if (item.includes(' ')) throw new Error(`[Error]${Constant.WRONG_NAME}`);
      if (typeof item !== 'string')
        throw new Error(`[Error]${Constant.WRONG_NAME}`);
    });
  }
}

module.exports = Validate;
