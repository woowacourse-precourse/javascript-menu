const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('./constants');
const OutputView = require('./OutputView');

const InputView = {
  COACH_NAMES: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  HATE_FOODS: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',

  readCoachNames(callback) {
    InputView.question(InputView.COACH_NAMES, (input) => {
      const coachNames = input.replace(/\s/g, '').split(',');

      InputView.validateCoachNames(coachNames);
      callback(coachNames);
    });
  },

  validateCoachNames(coachNames) {
    InputView.validateCoachLength(coachNames);

    coachNames.forEach((coachName) => {
      InputView.validateCoachNameLength(coachName);
    });
  },

  validateCoachLength(coachNames) {
    if (
      coachNames.length < INPUT.MIN_COACH_COUNT ||
      coachNames.length > INPUT.MAX_COACH_COUNT
    ) {
      throw new Error(
        `코치는 최소 ${INPUT.MIN_COACH_COUNT}명부터 최대 ${INPUT.MAX_COACH_COUNT}명 입력 가능합니다.`,
      );
    }
  },

  validateCoachNameLength(coachName) {
    if (
      coachName.length < INPUT.MIN_COACH_NAME ||
      coachName.length > INPUT.MAX_COACH_NAME
    ) {
      throw new Error(
        `코치 이름은 ${INPUT.MIN_COACH_NAME}글자부터 ${INPUT.MAX_COACH_NAME}글자까지 입력 가능합니다.`,
      );
    }
  },

  readHateMenus(coachName, callback) {
    InputView.question(`\n${coachName}${InputView.HATE_FOODS}`, (input) => {
      const hateMenus = input.replace(/\s/g, '').split(',');

      InputView.validateHateMenus(hateMenus);
      callback(hateMenus);
    });
  },

  validateHateMenus(hateMenus) {
    if (hateMenus.length > INPUT.MAX_HATE_MENU) {
      throw new Error(
        `최대 ${INPUT.MAX_HATE_MENU}개의 못 먹는 메뉴를 선택할 수 있습니다.`,
      );
    }

    if (new Set(hateMenus).size !== hateMenus.length) {
      throw new Error('똑같은 메뉴를 입력할 수 없습니다.');
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
