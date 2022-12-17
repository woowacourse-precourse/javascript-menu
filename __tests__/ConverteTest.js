const { CATEGORY } = require('../src/Constants');
const {
  convertNumberToCategory,
  convertToStringArray,
} = require('../src/utils/Converter');

describe('변환자 테스트', () => {
  const categories = Object.values(CATEGORY)
    .slice(1)
    .map((category, i) => [i + 1, category]);

  test.each(categories)(
    '숫자에 따른 카테고리 이름으로 변환한다.',
    (no, category) => {
      expect(convertNumberToCategory(no)).toEqual(category);
    }
  );

  const namesTestArray = [
    ['토미,제임스,포코', ['토미', '제임스', '포코']],
    ['우동,스시', ['우동', '스시']],
  ];

  test.each(namesTestArray)(
    '입력 받은 문자열을 쉼표(,)로 구분해 배열로 변환한다.',
    (names, expected) => {
      expect(convertToStringArray(names)).toEqual(
        expect.arrayContaining(expected)
      );
    }
  );
});
