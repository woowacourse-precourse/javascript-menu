const MissionUtils = require("@woowacourse/mission-utils");

const Coach = require("./Coach");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { checkCoachNumber } = require("./validation");
const { categories, menus } = require("./lunch");

class MenuRecommendation {
  constructor() {
    this.coachs = [];
    this.count = 0;
    this.category = [];
  }

  receiveCat() {
    OutputView.printCat(this.category);
  }

  receiveResult() {
    OutputView.printEndText();
    this.receiveCat();
    OutputView.printCoachLunch(this.coachs);
    OutputView.printExit();
  }

  chooseMenuForCoach(coach) {
    for (let i = 0; i < 5; i++) {
      let todayCat = this.category[i];

      let numArr = [];
      for (let j = 1; j < menus[todayCat].length + 1; j++) {
        numArr.push(j);
      }

      const menu = MissionUtils.Random.shuffle(numArr)[0];

      this.coachs[Number(coach)].setLunch(menus[todayCat][menu - 1]);
    }
  }

  chooseMenu() {
    for (let i = 0; i < this.coachs.length; i++) {
      this.chooseMenuForCoach(i);
      if (
        !new Set(this.coachs[i].getLunch()).size ===
        this.coachs[i].getLunch().length
      ) {
        i--;
      }
    }

    this.receiveResult();
  }

  chooseCat() {
    while (this.category.length < 5) {
      let randomNum = MissionUtils.Random.pickNumberInRange(1, 5);
      let random = categories.get(randomNum);

      if (this.category.includes(random)) {
        if (new Set(random).size + 1 === this.category.length) {
          this.category.push(random);
        }
      } else if (!this.category.includes(random)) {
        this.category.push(random);
      }
    }

    this.chooseMenu();
  }

  receiveDislikeMenu(menus) {
    menus.split(",").forEach((menu) => {
      this.coachs[this.count].setDislikeMenu(menu);
    });
    this.count++;

    if (this.count === this.coachs.length) {
      this.chooseCat();
    } else {
      InputView.readDislikeMenu(
        this.receiveDislikeMenu.bind(this),
        this.coachs,
        this.count
      );
    }
  }

  receiveCoachName(names) {
    names.split(",").forEach((name) => {
      this.coachs.push(new Coach(name));
    });

    if (checkCoachNumber(this.coachs.length)) {
      return InputView.readCoachName(this.receiveCoachName.bind(this));
    }

    InputView.readDislikeMenu(
      this.receiveDislikeMenu.bind(this),
      this.coachs,
      0
    );
  }

  start() {
    OutputView.printStartText();

    InputView.readCoachName(this.receiveCoachName.bind(this));
  }
}

module.exports = MenuRecommendation;
