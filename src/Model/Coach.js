const { MENU_SAMPLE } = require("../constant/value");

class Coach {
  #name;
  #pickyMenu;
  #menuOfWeek;

  constructor(name, pickyMenu) {
    this.validateName(name);
    this.validatePickyMenu(pickyMenu);
    this.#name = name;
    this.#pickyMenu = pickyMenu;
    this.#menuOfWeek = [];
  }

  getName() {}

  validateName(name) {
    if (!CrewInfo.course.includes(options[0]))
      throw new Error("[ERROR] 코치의 이름은 2~4글자여야 합니다.");
  }

  validatePickyMenu(pickyMenu) {}
}

module.exports = Coach;
