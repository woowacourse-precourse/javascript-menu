const Coach = require('./domain/Coach');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const findFoodLocation = require('./utils/findFoodLocation');
const getCategory = require('./utils/getCategory');
const verify = require('./utils/verify');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  #foodCategory;
  #coaches;

  play() {
    this.#coaches = [];
    OutputView.gameStart();
    return this.setFoodCategories();
  }

  setFoodCategories() {
    this.#foodCategory = getCategory(verify.moreThanTwoData);
    return this.inputCoaches();
  }

  inputCoaches() {
    InputView.inputCoachNames((input) => {
      try {
        verify.nameCount(input);
        verify.nameLengthCount(input);
        const names = input.split(',');
        names.forEach((name) => {
          this.#coaches.push(new Coach(name));
        });

        return this.unableEatCheckStart(0);
      } catch (error) {
        if (error.message === 'Invalid Coach Count') OutputView.ErrorCoachCount();
        if (error.message === 'Invalid Name Length') OutputView.ErrorCoachName();
        return this.inputCoaches();
      }
    });
  }

  unableEatCheckStart(coachLength) {
    if (coachLength === this.#coaches.length) return;
    InputView.inputCoachUnableMenu(this.#coaches[coachLength].getCoachName(), (input) => {
      try {
        verify.unableMenuLength(input);
        verify.existMenu(input);
        this.#coaches[coachLength].setUnableFood(findFoodLocation(input));
        if (coachLength < this.#coaches.length - 1)
          return this.unableEatCheckStart(coachLength + 1);
        // return this.mondaySuggest();
        return this.suggestMenu(0);
      } catch (error) {
        console.error(error);
        if (error.message === 'No Food') OutputView.ErrorNoMenu();
        if (error.message === 'OverFlow Foods') OutputView.ErrorNoMenuLength();
        return this.unableEatCheckStart(coachLength);
      }
    });
  }

  suggestMenu(coachLength) {
    if (coachLength === this.#coaches.length) return;
    this.#foodCategory.forEach((category) => {
      console.log(category);
      this.#coaches[coachLength].suggestMenu(category);
    });
    if (coachLength < this.#coaches.length - 1) return this.suggestMenu(coachLength + 1);
    return this.printResult();
  }

  printResult() {
    OutputView.printResultMessage();
    OutputView.printDays();
    OutputView.printCategory(this.#foodCategory);
    return this.printCoaches();
  }

  printCoaches() {
    this.#coaches.forEach((coach) => {
      OutputView.printCoachResult(coach.getResultData());
    });
    return this.gameEnd();
  }

  gameEnd() {
    OutputView.quitGame();
  }
}

const app = new App();
app.play();

module.exports = App;
