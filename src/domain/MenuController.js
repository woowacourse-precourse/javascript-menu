const { OUTPUT_MESSAGES } = require('../constants/messages');
const menuList = require('../menuData');
const { pickNumberInRange, shuffle } = require('../utils/mission');
const Validator = require('../validate/Validator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class MenuController {
  #coachMembers;
  #unableToEatMenu = [];
  #weekCategory = [];
  #weekMenu = [];

  constructor() {
    this.validator = new Validator();
  }

  start() {
    OutputView.printStart(OUTPUT_MESSAGES.start);
    this.getCoachName();
  }

  getCoachName() {
    const callback = (coachName) => {
      try {
        this.#coachMembers = coachName.split(',');
        this.validateCoachName();
        this.getUnableToEatMenu();
      } catch (error) {
        OutputView.printError(error);
        this.getCoachName();
      }
    };

    InputView.readCoachName(callback);
  }

  validateCoachName() {
    this.validator.checkCoachMemberCount(this.#coachMembers.length);
    this.validator.checkCoachNameLength(this.#coachMembers);
    this.validator.checkSeperator(this.#coachMembers);
  }

  getUnableToEatMenu() {
    if (this.#coachMembers.length === 2) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus.split(',') });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus.split(',') });
          for (let i = 0; i < 5; i++) {
            this.createRecommendedMenu();
          }
          this.printResult();
        });
      });
    }

    // TODO : 리팩토링
    if (this.#coachMembers.length === 3) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus });
          InputView.readCoachUnableEatMenu(this.#coachMembers[2], (menus) => {
            this.#unableToEatMenu.push({ [this.#coachMembers[2]]: menus });
          });
        });
      });
    }

    if (this.#coachMembers.length === 4) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus });
          InputView.readCoachUnableEatMenu(this.#coachMembers[2], (menus) => {
            this.#unableToEatMenu.push({ [this.#coachMembers[2]]: menus });
            InputView.readCoachUnableEatMenu(this.#coachMembers[3], (menus) => {
              this.#unableToEatMenu.push({ [this.#coachMembers[3]]: menus });
            });
          });
        });
      });
    }

    if (this.#coachMembers.length === 5) {
      InputView.readCoachUnableEatMenu(this.#coachMembers[0], (menus) => {
        this.#unableToEatMenu.push({ [this.#coachMembers[0]]: menus });
        InputView.readCoachUnableEatMenu(this.#coachMembers[1], (menus) => {
          this.#unableToEatMenu.push({ [this.#coachMembers[1]]: menus });
          InputView.readCoachUnableEatMenu(this.#coachMembers[2], (menus) => {
            this.#unableToEatMenu.push({ [this.#coachMembers[2]]: menus });
            InputView.readCoachUnableEatMenu(this.#coachMembers[3], (menus) => {
              this.#unableToEatMenu.push({ [this.#coachMembers[3]]: menus });
              InputView.readCoachUnableEatMenu(this.#coachMembers[4], (menus) => {
                this.#unableToEatMenu.push({ [this.#coachMembers[4]]: menus });
              });
            });
          });
        });
      });
    }
  }

  createRecommendedMenu() {
    const categoryNumber = pickNumberInRange(1, 5);
    // 1이면 일식, 2면 한식, 3이면 중식, 4면 아시안, 5면 양식
    const menu = menuList[categoryNumber - 1];

    let category = '';
    let menuItemList = '';
    Object.entries(menu).forEach(([todayCategory, menuItem]) => {
      category = todayCategory;
      menuItemList = menuItem;
    });

    this.#weekCategory.push(category);

    // 셔플에서 뽑은 인덱스에 해당하는 메뉴가 추천 메뉴가된다.
    const randomIndex = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    this.#weekMenu.push(menuItemList[randomIndex]);
  }

  // 결과를 출력시키는 메서드
  printResult() {
    OutputView.printResult(this.#coachMembers[0], this.#weekCategory, this.#weekMenu);
  }
}

module.exports = MenuController;
