const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;

const InputView = {
  readCoachName() {
    let namesInputArray = [];

    Console.readLine(`코치의 이름을 입력해 주세요. (, 로 구분)`, namesInput => {
      namesInputArray = namesInput.split(',');
      this.validateNamesInput(namesInputArray);
    });

    return namesInputArray;
  },

  validateNamesInput(namesInputArray) {
    if (namesInputArray.length < 2) {
      throw new Error(`[ERROR] 코치는 최소 2명 이상 입력해야 합니다.`);
    } else if (namesInputArray.length > 5) {
      throw new Error(`[ERROR] 코치는 최대 5명까지 입력해야 합니다.`);
    }

    for (let i; i < namesInputArray.length; i++) {
      if (namesInputArray[i].length < 2) {
        throw new Error(`[ERROR] 코치 이름은 2글자 이상이어야 합니다.`);
      } else if (namesInputArray[i].length > 4) {
        throw new Error(`[ERROR] 코치 이름은 4글자 이하여야 합니다.`);
      }
    }
  },

  getCoachNameArray() {
    let CoachNameArray = [];
    try {
      CoachNameArray = this.readCoachName();
    } catch (error) {
      Console.print(error.message);
      this.getCoachNameArray();
    }
    return CoachNameArray;
  },

  readCoachCannotEatFoods(coachName) {
    let cannotEatFoodsArray = [];

    Console.readLine(
      `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.`,
      foodsInput => {
        cannotEatFoodsArray = foodsInput.split(',');
        this.validateFoodsInput(cannotEatFoodsArray);
      }
    );

    return cannotEatFoodsArray;
  },

  validateFoodsInput(cannotEatFoodsArray) {
    if (cannotEatFoodsArray.length < 0) {
      throw new Error(`[ERROR] 못 먹는 음식은 0개 이상이어야 합니다.`);
    } else if (cannotEatFoodsArray.length > 2) {
      throw new Error(`[ERROR] 못 먹는 음식은 최대 2개까지 입력해야 합니다.`);
    }
  },

  getCoachCannotEatFoodsArray(coachName) {
    let cannotEatFoodsArray = [];
    try {
      cannotEatFoodsArray = this.readCoachCannotEatFoods(coachName);
    } catch (error) {
      Console.print(error.message);
      this.getCoachCannotEatFoodsArray();
    }
    return cannotEatFoodsArray;
  },
};

module.exports = InputView;
