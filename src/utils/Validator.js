const { REGEX, MENUS } = require('../constants');

const ERROR_MESSAGE = {
  INVALID_COACHES_NAME: '코치의 이름은 2글자 이상 4글자 이하의 한글 또는 영문으로 입력해주세요.',
  INVALID_COACHES_LENGTH: '2명 이상 5명 이하의 이름을 입력해주세요.',
  INVALID_NON_EDIBLE_MENUS_LENGTH: '먹지 못하는 메뉴는 2개를 넘을 수 없습니다.',
  INVALID_MENU: '존재하지 않는 메뉴가 포함되어 있습니다.',
};

const Validator = {
  throwErrorIfInvalidCoachesName(names) {
    if (!REGEX.COACHES_NAME.test(names)) throw new Error(ERROR_MESSAGE.INVALID_COACHES_NAME);

    const coaches = names.replace(REGEX.SPACE, '').split(',');
    if (coaches.length < 2 || coaches.length > 5) {
      throw new Error(ERROR_MESSAGE.INVALID_COACHES_LENGTH);
    }
  },

  throwErrorIfInvalidNonEdibleMenus(menus) {
    const menus = menus.replace(REGEX.SPACE, '').split(',');
    if (menus.length > 2) throw new Error(ERROR_MESSAGE.INVALID_NON_EDIBLE_MENUS_LENGTH);

    const allMenus = Object.keys(MENUS).reduce((acc, cur) => {
      acc = [...acc, ...MENUS[cur].split(', ')];

      return acc;
    }, []);

    const isValideMenu = menus.every((menu) => allMenus.includes(menu));
    if (!isValideMenu) throw new Error(ERROR_MESSAGE.INVALID_MENU);
  },
};

module.exports = Validator;
