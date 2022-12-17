const { Console } = require('@woowacourse/mission-utils');

const validateCoachName = (coach) => {
  const numberOfCoach = coach.length;

  if (numberOfCoach < 2 || numberOfCoach > 5) {
    Console.print('[ERROR] 코치는 2명 이상, 5명 이하입니다.');
    throw new Error();
  }

  const filterCoach = coach.filter((name) => name.length >= 2 && name.length <= 4);
  if (filterCoach.length !== numberOfCoach) {
    Console.print('[ERROR] 코치의 이름은 2글자 이상, 4글자 이하입니다.');
    throw new Error();
  }
};

module.exports = { validateCoachName };
