const { Console } = require('@woowacourse/mission-utils');

const Coach = require('./models/Coach');
const Coaches = require('./models/Coaches');
const CategoryMaker = require('./utils/CategoryMaker');
const ListValidator = require('./utils/ListValidator');
const MenuPicker = require('./utils/MenuPicker');
const RandomNumberGenerator = require('./utils/RandomNumberGenerator');
const { readCoaches, readMenu } = require('./views/InputView');
const {
  printStart,
  printCoachMenus,
  printResult,
  printCategories,
  printDays,
  printEmptyLine,
  printFinish,
  printError,
} = require('./views/OutputView');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

class App {
  #coaches;

  #index = 0;

  play() {
    printStart();
    readCoaches(this.#onCoachesSubmit.bind(this));
  }

  #onCoachesSubmit(names) {
    try {
      const nameList = names.split(',');
      ListValidator.validate(nameList);
      const coaches = names.split(',').map((coach) => new Coach(coach));
      this.#coaches = new Coaches(coaches);
      return readMenu(this.#coaches, this.#index, this.#onMenuSubmit.bind(this));
    } catch (error) {
      printError(error);
      readCoaches(this.#onCoachesSubmit.bind(this));
    }
  }

  #onMenuSubmit(menu) {
    try {
      const menus = menu.split(',');
      ListValidator.validate(menus);
      this.#coaches.setCoachMenu(this.#index, menus);
      this.#index += 1;

      if (this.#index === this.#coaches.count()) {
        this.#runFinish();
        return Console.close();
      }

      return readMenu(this.#coaches, this.#index, this.#onMenuSubmit.bind(this));
    } catch (error) {
      printError(error);
      readMenu(this.#coaches, this.#index, this.#onMenuSubmit.bind(this));
    }
  }

  #runFinish() {
    printResult();
    printDays();
    const categories = CategoryMaker.makeCategories(RandomNumberGenerator.generate);
    printCategories(categories);
    this.#coaches.getState().forEach((coach) => {
      categories.forEach((category) => {
        const menus = SAMPLE[category].split(', ');
        this.#addToEat(coach, menus);
      });
    });

    this.#printCoaches();
    printEmptyLine();
    printFinish();
  }

  #printCoaches() {
    this.#coaches.getState().forEach((coach) => {
      const coachMenus = coach.toString();
      printCoachMenus(coachMenus);
    });
  }

  #addToEat(coach, menus) {
    const recommend = this.#pickNonDuplicate(coach, menus);
    coach.addToEat(recommend);
  }

  #pickNonDuplicate(coach, menus) {
    let recommend = MenuPicker.pickMenu(menus);
    while (!coach.isCanRecommend(recommend)) {
      recommend = MenuPicker.pickMenu(menus);
    }
    return recommend;
  }
}

module.exports = App;
