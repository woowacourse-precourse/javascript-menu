const MissionUtils = require('@woowacourse/mission-utils');
const Constant = require('./Constant');

class InputView {
  constructor(menuController) {
    this.menuController = menuController;
  }

  readCrewNames(setCrewNameFn) {
    MissionUtils.Console.readLine(Constant.INSERT_NAMES, names => {
      setCrewNameFn(names);
    });
  }

  readCanNotEat(crews, count, callback) {
    let index = count;
    if (crews[index] === undefined) return callback();

    const name = crews[index].getName();
    MissionUtils.Console.readLine(`${name}${Constant.CANNOT_EAT}`, list => {
      crews[index].setCanNotEat(list);
      if (index < crews.length) {
        index += 1;
        return this.readCanNotEat(crews, index, callback);
      }
    });
  }
}

module.exports = InputView;
