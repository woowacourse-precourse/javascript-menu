const MENU_MAP = require('../constants');

const Validator = {
  checkInput(input) {
    if (input.includes(' ')) throw new Error('공백은 포함이 불가능합니다.');
  },

  checkNames(input) {
    Validator.checkInput(input);
    const names = input.split(',');
    const isUnable = (coach) => coach.length < 2 || coach.length > 4;
    if (names.some(isUnable)) throw new Error('불가능한 이름입니다.');
    if (new Set(names).size !== names.length) throw new Error('중복은 불가능합니다.');
    if (names.length < 2 || names.length > 5) throw new Error('최소 2명, 최대 5명까지 가능합니다.');
  },

  checkHates(input) {
    Validator.checkInput(input);
    if (input === '') return;
    const hates = input.split(',');
    if (hates.every(Validator.isInMenu) === false) throw new Error('메뉴에 없는 음식입니다.');
    if (new Set(hates).size !== hates.length) throw new Error('중복은 불가능합니다.');
    if (hates.length > 2) throw new Error('최대 2개까지 가능합니다.');
  },

  isInMenu(food) {
    let inMenu = false;
    Object.values(MENU_MAP).forEach((menu) => {
      inMenu += menu.includes(food);
    });

    return inMenu;
  },
};

module.exports = Validator;
