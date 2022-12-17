const LunchRecommendation = require('../domain/LunchRecommendation');
const menuDB = require('../storage/menuDB');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #lunchRecommendation;
  #outputView;
  #inputView;

  constructor(SAMPLE) {
    this.#lunchRecommendation = new LunchRecommendation(SAMPLE);
    this.#outputView = OutputView;
    this.#inputView = InputView;
  }

  execute() {
    this.#outputView.printStart();
    this.#inputView.readCoaches(this.#handleSettingCoach.bind(this));
  }

  #handleSettingCoach(coachNames) {
    console.log('coachNames', coachNames);
    this.#lunchRecommendation.setCoaches(coachNames);

    const coachList = this.#lunchRecommendation.getCoaches();
    this.#inputView.readCannotEat(coachList[0], this.#handleSettingCannotEat(coachList).bind(this));
  }

  #handleSettingCannotEat(coachList) {
    return (menusCannotEat) => {
      const coach = coachList.shift();

      if (menusCannotEat[0] !== '')
        this.#lunchRecommendation.setMenusCannotEat(coach, menusCannotEat);

      if (coachList.length === 0) return this.#recommendLunchMenu();

      this.#inputView.readCannotEat(
        coachList[0],
        this.#handleSettingCannotEat(coachList).bind(this)
      );
    };
  }

  #recommendLunchMenu() {
    const recommendationResult = this.#lunchRecommendation.getRecommendation();

    //TODO: #model -> 메뉴 추천 결과 가져오기
    //TODO: #output -> 메뉴 추천 결과 출력하기
  }

  #end() {
    //TODO: #output -> 추천을 완료했습니다.
  }
}

// const controller = new Controller({
//   일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
//   한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
//   중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
//   아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
//   양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
// });

module.exports = Controller;
