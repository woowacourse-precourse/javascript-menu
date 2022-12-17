const { MenuMap } = require('../domain/MenuMap');

const Validation = {
  ofCoachName(userInput) {
    if (!userInput.split(',').every((name) => name.length >= 2 && name.length <= 4)) {
      throw new Error('[ERROR] 코치의 이름은 2글자 이상 4글자 이하로만 입력해주세요');
    }
    if (userInput.split(',').length < 2 || userInput.split(',').length > 5) {
      throw new Error('[ERROR] 코치는 최소 2명 이상 입력해야 합니다.');
    }
  },

  ofMenu(userInput) {
    const menu = [...MenuMap.values()].join(', ').split(', ');
    if (!userInput.split(',').every((food) => menu.includes(food)))
      throw new Error('[ERROR] 메뉴에 없는 메뉴입니다.');
  },
};

module.exports = { Validation };
