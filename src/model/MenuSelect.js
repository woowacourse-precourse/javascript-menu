const SAMPLE = require('../constant/Menu');
const { Random } = require('@woowacourse/mission-utils');

class MenuSelect {
  constructor(coachInfo, categoryType) {
    [this.coachName, this.coachNotEat] = coachInfo;
    this.categoryType = categoryType;
    this.todayMenu = [];
    this.recommandMenu = [];
    this.coachTurn = 1;
    this.recommandWeekMenu = [];
    this.day = 0;
  }

  makeTodayMenu() {
    this.categoryType.map((type) => {
      this.todayMenu = SAMPLE[Object.keys(SAMPLE)[type]].split(', ');
      this.turnCoachPickMenu();
      this.day += 1;
    });
    return this.recommandWeekMenu;
  }

  turnCoachPickMenu() {
    this.coachName.map((_, index) => {
      const recommand = this.selectTodayMenu();
      const notEatList = this.coachNotEat[index];
      const fix = this.checkEatable(recommand, notEatList);
      this.coachNotEat[index].push(recommand);
      this.recommandMenu.push(fix);
      this.coachTurn += 1;
    });
    this.recommandWeekMenu.push(this.recommandMenu);
    this.recommandMenu = [];
  }

  checkEatable(recommand, notEatList) {
    const judge = notEatList.filter(([type, idx]) => type === recommand[0] && idx && recommand[1]);
    return judge.length !== 0 ? this.selectTodayMenu() : recommand;
  }

  selectTodayMenu() {
    return [this.categoryType[this.day], Random.pickNumberInRange(0, this.todayMenu.length - 1)];
  }
}

module.exports = MenuSelect;
