const { Console, Random } = require('@woowacourse/mission-utils');
const { START_MESSAGE, NOT_EAT_MENU } = require('./Constants');
const { checkValidateCoach, checkValidateCoachNames } = require('./Validate');
const { readCoachName, readNotEatMenu } = require('./InputView');
const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  play() {
    Console.print(START_MESSAGE);
    this.getCoachName();
  }

  getCoachName() {
    readCoachName(coachName => {
      this.changeCoachNameToArray(coachName);
    });
  }

  changeCoachNameToArray(coachNames) {
    const nameSplit = coachNames.split(',');
    const nameArray = Array.from(nameSplit);

    this.validateCoachName(nameArray);
  }

  validateCoachName(nameArray) {
    try {
      checkValidateCoach(nameArray);
      checkValidateCoachNames(nameArray);

      this.getNotEatMenu();
    } catch (error) {
      Console.print(error);
      this.getCoachName();
    }
  }

  getNotEatMenu() {}

  // getCategories() {
  //   const categoriesNumber = Random.pickNumberInRange(1, 5);
  //   this.categories = Object.keys(SAMPLE)[categoriesNumber];
  // }

  // getMenu() {
  //   const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 9);
  // const menu = Random.shuffle(randomNumber)[0];
  // }
}

const app = new App();
app.play();
module.exports = App;
