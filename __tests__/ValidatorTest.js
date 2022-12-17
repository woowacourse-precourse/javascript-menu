const Validator = require('../src/utils/Validator');

const getExceptionTest = (inputList, validatorFunction) => {
  return () => {
    inputList.forEach((input) => {
      expect(() => {
        validatorFunction(input);
      }).toThrow();
    });
  };
};

describe('입력값 검증 테스트', () => {
  describe('코치 이름 테스트', () => {
    test(
      '공백이 포함되면 에러',
      getExceptionTest(['포비, 제이슨', '강 현,바 슈'], Validator.checkNames)
    );
    test(
      '이름 길이가 범위를 벗어나면 에러',
      getExceptionTest(['포비,준', '포비,스티브잡스'], Validator.checkNames)
    );
    test(
      '이름이 중복되면 에러',
      getExceptionTest(['포비,포비', '브라운,브라운'], Validator.checkNames)
    );
    test(
      '코치의 수가 범위를 벗어나면 에러',
      getExceptionTest(['포비', '포비,브라운,제이슨,왼손,빌게이츠,강현'], Validator.checkNames)
    );
  });

  describe('못 먹는 메뉴 테스트', () => {
    test('공백이 포함되면 에러', getExceptionTest(['김밥, 스시'], Validator.checkHates));
    test('메뉴에 없으면 에러', getExceptionTest(['푸팟뽕커리', '치킨'], Validator.checkHates));
    test('중복이면 에러', getExceptionTest(['김밥,김밥', '스시,스시'], Validator.checkHates));
    test('3개 이상이면 에러', getExceptionTest(['김밥,스시,규동'], Validator.checkHates));
  });
});
