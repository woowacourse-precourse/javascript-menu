const menuDB = require('../storage/menuDB');

const InputValidator = Object.freeze({
  checkCoaches(coachList) {
    this.checkCoachesSize(coachList);
    this.checkCoachesNameLength(coachList);
    this.checkCoachRepeat(coachList);
  },

  checkCoachesSize(coachList) {
    if (coachList.length < 2 || coachList.length > 5) {
      throw new Error(`[ERROR] 코치는 최소 2명, 최대 5명까지 식사를 함께 합니다.`);
    }
  },

  checkCoachesNameLength(coachList) {
    coachList.forEach((coach) => {
      if (coach.length < 2 || coach.length > 4) {
        throw new Error(`[ERROR] 코치의 이름은 최소 2글자, 최대 4글자입니다.`);
      }
    });
  },

  checkCoachRepeat(coachList) {
    if (new Set(coachList).size !== coachList.length) {
      throw new Error(`[ERROR] 중복된 코치 이름이 있습니다.`);
    }
  },

  checkMenus(menuList) {
    if (menuList[0] === '') return;

    const wholeMenusInDB = Object.values(menuDB).flat();

    this.checkMenuLength(menuList);
    this.checkMenuRepeat(menuList);
    this.checkNotFoundMenu(menuList, wholeMenusInDB);
  },

  checkMenuLength(menuList) {
    if (menuList.length > 2) {
      throw new Error(`[ERROR] 각 코치는 최소 0개, 최대 2개의 못 먹는 메뉴가 있습니다.`);
    }
  },

  checkMenuRepeat(menuList) {
    if (new Set(menuList).size !== menuList.length) {
      throw new Error(`[ERROR] 중복된 메뉴가 있습니다.`);
    }
  },

  checkNotFoundMenu(menuList, wholeMenus) {
    menuList.forEach((menu) => {
      if (!wholeMenus.contain(menu)) throw new Error(`[ERROR] 등록되지 않은 메뉴입니다.`);
    });
  },
});

// InputValidator.checkCoaches(['김또', '유권', '유가리', '유가', '기리', '오로']);
// InputValidator.checkMenus(['고기', '고기']);

module.exports = InputValidator;
