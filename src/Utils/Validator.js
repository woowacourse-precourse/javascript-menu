const { ERROR_MESSAGES, MENU } = require("./Constants");
const {
  NOT_TWO_AND_FOUR_LENGTH,
  NOT_ENOUGH_PEOPLE,
  OVER_TWO_FOOD,
  NOT_EXIST_FOOD,
  NOT_KOREAN,
} = ERROR_MESSAGES;

const regexKorean = /^[가-힣]+$/;
const allMenus =
  MENU["한식"] + MENU["일식"] + MENU["중식"] + MENU["아시안"] + MENU["양식"];

class Validator {
  notEnoughPeople(name) {
    if (name.length < 2 || name.length > 5) {
      throw new Error(NOT_ENOUGH_PEOPLE);
    }
  }

  inappropriateName(name) {
    if (name.map((coach) => regexKorean.test(coach)).includes(false)) {
      throw new Error(NOT_KOREAN);
    }

    const isEnoughLength = name.map((coach) =>
      coach.length < 2 || coach.length > 4 ? true : false
    );

    if (isEnoughLength.includes(true)) {
      throw new Error(NOT_TWO_AND_FOUR_LENGTH);
    }
  }

  notExistMenu(menu) {
    const isIncluded = menu
      .split(",")
      .map((food) => (allMenus.split(",").includes(food) ? true : false));

    if (isIncluded.includes(false)) throw new Error(NOT_EXIST_FOOD);
  }

  tooMany(menu) {
    menu = menu.split(",");
    if (menu.length > 2) {
      throw new Error(OVER_TWO_FOOD);
    }
  }
}

module.exports = new Validator();
