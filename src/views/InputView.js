const MissionUtils = require('@woowacourse/mission-utils');
const { READ_MESSAGE } = require('../utils/constants');
const { isValidCoaches } = require('../utils/coachValidation');

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
    console.log(arr.length, index, result);
    if (index !== arr.length) {
      const temp = [...result];
      MissionUtils.Console.readLine(`${arr[index]}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (answer) => {
        console.log(answer);
        InputView.readBannedFoods(setCoachesBannedFoods, arr, index + 1, temp.concat({
          name: arr[index],
          foods: answer,
        }));
      });
    } else {
      setCoachesBannedFoods(result);
    }
  },
};

module.exports = InputView;
