const LunchRecommendation = require('../domain/LunchRecommendation');
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
    //TODO: #input -> readCoachName --> handleSettingCoach
  }

  #handleSettingCoach(coachName) {
    //TODO: #model -> coach 객체 생성하여 저장
    //TODO: #model -> coach list 받기.
    //TODO: 코치 못먹는 메뉴 설정
    //TODO: #input ->  cannotEat(못먹는 메뉴)입력 --> handleSettingCannotEat
  }

  #handleSettingCannotEat(coachList, cannotEatMenuList) {
    //TODO: #model -> coach 객체에서 못먹는 메뉴 등록
    //TODO: coachList가 남아 있는 경우)
    //TODO: #input ->  cannotEat(못먹는 메뉴)입력 --> handleSettingCannotEat
    //TODO: coachList가 없는 경우)
    //TODO: 메뉴 추천 결과
  }

  #recommendLunchMenu() {
    //TODO: #model -> 메뉴 추천 결과 가져오기
    //TODO: #output -> 메뉴 추천 결과 출력하기
  }

  #end() {
    //TODO: #output -> 추천을 완료했습니다.
  }
}

module.exports = Controller;
