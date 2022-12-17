const { Console } = require('@woowacourse/mission-utils');

const controller = require('./GameController');
// const OutputView = require('./OutputView');

const { GAME_TEXT } = require('./utils/constants');
const { errorCheckFor } = require('./utils/errorCheckFor');
const InputException = require('./utils/InputException');

// const SAMPLE = {
//   일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
//   한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
//   중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
//   아시안:
//     '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
//   양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
// };

class App {
  // coach 입력
  #successReadCoachEvent(input) {
    InputException.checkCoach(input);
    controller.inputCoach(input);

    return this;
  }

  #readCoachEvent(input) {
    errorCheckFor(
      () => this.#successReadCoachEvent(input),
      () => this.readCoach() // 함수명 변경
    );
  }

  readCoach() {
    Console.readLine(GAME_TEXT.coach, (input) => {
      this.#readCoachEvent(input);
    });
  }

  // 못먹는 음식 입력
  // readNotEat() {}

  play() {
    this.readCoach();
  }
}

module.exports = App;
