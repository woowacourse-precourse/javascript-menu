const MissionUtils = require('@woowacourse/mission-utils');
const Utils = require('./Utils');

class InputView {
  constructor(menuController) {
    this.menuController = menuController;
  }

  readCrewNames(callback) {
    MissionUtils.Console.readLine(
      '코치의 이름을 입력해 주세요. (, 로 구분)\n',
      names => {
        callback(names);
      },
    );
  }

  readCanNotEat(crews, number, callback) {
    let count = number;
    if (crews[count] === undefined) return callback();
    let name = crews[count].getName();
    MissionUtils.Console.readLine(
      `${name}(이)가 못 먹는 메뉴를 입력해 주세요\n`,
      list => {
        crews[count].setCanNotEat(list);

        if (count < crews.length) {
          crews.splice[count];
          count += 1;
          return this.readCanNotEat(crews, count, callback);
        }
      },
    );
  }
}

module.exports = InputView;
