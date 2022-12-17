const Coach = require("./model/Coach");
const Menu = require("./model/Menu");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const MissionUtils = require("@woowacourse/mission-utils");

const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

const coach = new Coach();
const menu = new Menu();

const categoryies = [];
const menuList = [];

class App {
  #coachList;

  constructor() {
    this.#coachList;
  }

  play = () => {
    OutputView.printStartMessage();
    InputView.readCoachNames(this.inputCoachNames);
  };

  inputCoachNames = (coachNames) => {
    coach.createCoachList(coachNames);
    this.inputInedibleMenusToCoach();
  };

  inputInedibleMenusToCoach = () => {
    const coachList = coach.getCoachList();
    coachList.forEach((coachObj) => {
      InputView.readInedibleMenus(this.readMenu, coachObj.name);
    });
  };

  //카테고리 선정

  settingCategories = () => {
    for (let category in SAMPLE) {
      categoryies.push(category);
      menuList.push(SAMPLE[category].split(","));
    }
    this.inputRecommendCategories();
  };

  inputRecommendCategories = () => {
    const categoryNum = MissionUtils.Random.pickNumberInRange(1, 5);
    if (menu.checkDuplicatedCategory(categoryNum, 2) === false) {
      return this.inputRecommendCategories();
    }
    menu.inputRecommendCategory(categoryNum);
    if (menu.checkCategoryListDone() === false) {
      return this.inputRecommendCategories();
    }
    return this.inputRecommendMenus();
  };

  //코치 리스트에서 한명씩 돌아가며 추천해주기

  inputRecommendMenus = () => {
    const coachList = coach.getCoachList();

    const menu = MissionUtils.Random.shuffle(["na", "b"]);

    console.log(menu, "er");

    // coachList.forEach((coachObj) => {

    // })
  };

  endRecommendSystem = () => {
    // const recommendedCategoryList = '한식,양식,일식,중식,아시안'
    // const recommendedCoachMenuList = [{name:구구, recommendedCoachMenuList='김치찌개,스파게티,규동,짜장면,카오 팟'},{name:'제임스',recommendedCoachMenuList:'제육볶음,라자냐,가츠동,짬뽕,파인애플 볶음밥'}]

    OutputView.printRecommendedMenusResult(
      recommendedCategoryList,
      recommendedCoachMenuList
    );
    OutputView.printEndMessage();
  };
}

const app = new App();
app.settingCategories();
// app.play();

module.exports = App;
