const { ERROR_MESSAGE, GAME_NUMBER } = require('./Constant');
const SplitAndTrim = require('./utils/SplitAndTrim');

const Validation = {
  coachAndName(names) {
    const nameArray = SplitAndTrim(names);
    Validation.coach(nameArray);
    Validation.nameOverlap(nameArray);
    nameArray.forEach((coachName) => {
      Validation.nameRange(coachName);
    });
  },
  nameRange(name) {
    if (
      name.length < GAME_NUMBER.minName ||
      name.length > GAME_NUMBER.maxName
    ) {
      throw new Error(ERROR_MESSAGE.nameRange);
    }
  },
  nameOverlap(nameArray) {
    const set = new Set(nameArray);
    if (nameArray.length !== set.size) {
      throw new Error(ERROR_MESSAGE.nameOverlap);
    }
  },
  coach(coaches) {
    if (
      coaches.length < GAME_NUMBER.minCoach ||
      coaches.length > GAME_NUMBER.maxCoach
    ) {
      throw new Error(ERROR_MESSAGE.coachRange);
    }
  },
  menu(menus) {
    const menuArray = SplitAndTrim(menus);
    Validation.menuRange(menuArray);
    menuArray.forEach((menu) => {
      Validation.menuNotKorean(menu);
      Validation.menuLength(menu);
    });
  },
  menuRange(menuArray) {
    if (
      menuArray.length < GAME_NUMBER.minMenu ||
      menuArray.length > GAME_NUMBER.maxMenu
    ) {
      throw new Error(ERROR_MESSAGE.menuRange);
    }
  },
  menuNotKorean(menu) {
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (!regExp.test(menu)) {
      throw new Error(ERROR_MESSAGE.menuNotKorean);
    }
  },
  menuLength(menu) {
    if (menu.length > GAME_NUMBER.maxMenuLength) {
      throw new Error(ERROR_MESSAGE.menuLength);
    }
  },
};

module.exports = Validation;
