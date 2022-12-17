const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCoach(coachList) {
    Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)\n', coachList);
  },

  readNoEatFood(handleFood, coach) {
    Console.readLine(`${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (foodList) => 
        handleFood(foodList, coach)
    );
  }
};

module.exports = InputView;