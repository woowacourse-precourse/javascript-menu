const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('./constants');
const OutputView = require('./OutputView');

const InputView = {
  COACH_NAMES: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  HATE_FOODS: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',

  readCoachNames(callback) {
    InputView.question(InputView.COACH_NAMES, (input) => {
      const coachNames = input.split(',');

      InputView.validateCoachNames(coachNames);
      callback(coachNames);
    });
  },

  validateCoachNames(coachNames) {
    if (
      coachNames.length < INPUT.MIN_COACH_COUNT ||
      coachNames.length > INPUT.MAX_COACH_COUNT
    ) {
      throw new Error('코치는 최소 2명부터 최대 5명 입력 가능합니다.');
    }

    coachNames.forEach((name) => {
      if (
        name.length < INPUT.MIN_COACH_NAME ||
        name.length > INPUT.MAX_COACH_NAME
      ) {
        throw new Error('코치 이름은 2글자부터 4글자까지 입력 가능합니다.');
      }
    });
  },

  readHateMenus(coachName, callback) {
    InputView.question(`${coachName} ${InputView.HATE_FOODS}`, (input) => {
      const hateMenus = input.split(',');

      InputView.validateHateMenus(hateMenus);
      callback(hateMenus);
    });
  },

  validateHateMenus(hateMenus) {
    if (hateMenus.length > INPUT.MAX_HATE_MENU) {
      throw new Error('최대 2개의 못 먹는 메뉴를 선택할 수 있습니다.');
    }
  },

  question(string, callback) {
    Console.readLine(string, (input) => {
      try {
        callback(input);
      } catch (error) {
        OutputView.printError(error);
        InputView.question(string, callback);
      }
    });
  },
};

module.exports = InputView;
