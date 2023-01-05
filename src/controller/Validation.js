const { MenuMap } = require('../domain/MenuMap');

const allFood = [...MenuMap.values()].join(', ').split(', ');

const isCorrectLength = userInput => {
  return userInput.split(',').every(name => name.length >= 2 && name.length <= 4);
};

const isCorrectHowManyCoach = userInput => {
  return userInput.split(',').length < 2 || userInput.split(',').length > 5;
};

const isCorrectInputOfFood = userInput => {
  return userInput.split(',').every(food => allFood.includes(food));
};

const Validation = {
  ofCoachName(userInput) {
    if (!isCorrectLength(userInput)) {
      throw new Error('[ERROR] 코치의 이름은 2글자 이상 4글자 이하로만 입력해주세요');
    }
    if (isCorrectHowManyCoach(userInput)) {
      throw new Error('[ERROR] 코치는 최소 2명 이상 입력해야 합니다.');
    }
  },

  ofMenu(userInput) {
    if (!isCorrectInputOfFood(userInput)) throw new Error('[ERROR] 메뉴에 없는 메뉴입니다.');
  },
};

module.exports = { Validation };
