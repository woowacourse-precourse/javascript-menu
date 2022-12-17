const { Console, Random } = require('@woowacourse/mission-utils');
const { CATEGORY } = require('./constants');
const Validation = require('./Validation');

class MenuCtrl {
  constructor() {
    this.currentCoachFlag = 0;
    this.coachNames = null;
  }

  readCoachName() {
    Console.readLine(
      '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
      (names) => {
        const error = Validation.isValidInput(names);
        if (error) return this.readCoachName();
        const coach = names.split(',');
        this.coachNames = coach;
        this.readUnableToEat();
      }
    );
  }

  readUnableToEat() {
    const coachesList = this.coachNames[this.currentCoachFlag];
    const message = `\n${coachesList}(이)가 못 먹는 메뉴를 입력해 주세요\n`;

    Console.readLine(`${message}`, (menusCoachCantEat) => {
      const error = Validation.isValidRangeOfFoodLength(menusCoachCantEat);
      if (error) return this.readUnableToEat();

      const divideMenusCoachCantEat = menusCoachCantEat.split(',');
      // todo 먹지 못하는 음식 할당해야함
      if (coachesList.length !== this.currentCoachFlag) {
        this.currentCoachFlag += 1;
        return this.readUnableToEat();
      } else {
        Console.print('\n메뉴 추천 결과입니다.');
        Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
        this.makeRandomMenus();
      }
    });
  }

  makeRandomMenus() {
    // const category = Random.pickNumberInRange(1, 5); // ex. 1
    // const selectedCategory = CATEGORY[category];
    const map = new Map();
    let flag = true;
    let answer = ['카테고리'];

    while (flag) {
      const category = Random.pickNumberInRange(1, 5);
      const selectedCategory = CATEGORY[category]; //양식
      if (!map.has(selectedCategory)) {
        map.set(selectedCategory, 1);
      } else if (map.get(selectedCategory) > 2) {
        continue;
      }

      if (map.size === 5) flag = false;
    }

    for (const [key, value] of map) {
      answer.push(key);
    }

    let categories = answer.join(' | ');
    Console.print(`[ ${categories} ]`);

    // const menus = MENUS[selectedCategory];
    // const selectedMenu = Random.shuffle(menus);
  }
}

module.exports = MenuCtrl;
