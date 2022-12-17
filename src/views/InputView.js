const MissionUtils = require('@woowacourse/mission-utils');
const { READ_MESSAGE } = require('../utils/constants');
const { isValidCoaches } = require('../utils/coachValidation');
const { isValidFoods } = require('../utils/foodValidation');

const InputView = {
  readCoaches(setCoaches) {
    MissionUtils.Console.readLine(READ_MESSAGE.readCoaches, (answer) => {
      try {
        isValidCoaches(answer);
        setCoaches(answer);
      } catch (error) {
        InputView.readCoaches(setCoaches);
      }
    });
  },

  readBannedFoods(setCoachesBannedFoods, arr, index, result) {
    if (index !== arr.length) {
      MissionUtils.Console.readLine(`${arr[index]}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (answer) => {
        try {
          isValidFoods(answer);
          InputView.readBannedFoods(setCoachesBannedFoods, arr, index + 1, [...result].concat({ name: arr[index], foods: answer }));
        } catch (error) {
          InputView.readBannedFoods(setCoachesBannedFoods, arr, index, result);
        }
      });
    } else {
      setCoachesBannedFoods(result);
    }
  },
};

module.exports = InputView;
