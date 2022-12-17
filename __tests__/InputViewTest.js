/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */

const { DIRECTION, ERROR, GAME_COMMAND } = require('../src/data/constants');
const Validator = require('../src/utils/Validator');

describe('유효성 테스트', () => {
  test('코치 이름 길이 유효성', () => {
    const invalid = ['1234567', '강상원강상원', '강'];
    invalid.forEach((invalidName) => {
      expect(() => Validator.coachesNameValidate(invalidName)).toThrow(
        ERROR.COACH_NAME,
      );
    });

    const valid = ['강상원', '박은지', '연필', '필라테스'];
    valid.forEach((validName) => {
      expect(() => Validator.coachesNameValidate(validName)).not.toThrow(
        ERROR.COACH_NAME,
      );
    });
  });

  test('코치 명수 유효성', () => {
    const invalid = ['강상', '강상원', '임창현', '상원', '박은지', '강영은'];
    invalid.forEach((invalidName) => {
      expect(() => Validator.coachesNumberValidate(invalidName)).toThrow(
        ERROR.COACH_NUMBER,
      );
    });

    const valid = ['강상', '강상원', '임창현', '상원'];
    valid.forEach((validName) => {
      expect(() => Validator.coachesNumberValidate(validName)).toThrow(
        ERROR.COACH_NUMBER,
      );
    });
  });

  test('못 먹는 음식 개수', () => {
    const invalid = '스시,비빔밥,짜장면,스파게티,마파두부';
    expect(() => Validator.coachCantEatMenuValidate(invalid)).toThrow(
      ERROR.COACH_CANT_EAT,
    );
  });

  const valid = '스시,비빔밥';
  expect(() => Validator.coachCantEatMenuValidate(valid)).toThrow(
    ERROR.COACH_CANT_EAT,
  );
});
