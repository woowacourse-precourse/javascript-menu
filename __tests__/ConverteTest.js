const { CATEGORY } = require('../src/Constants');
const { convertNumberToCategory } = require('../src/utils/Converter');

describe('변환자 테스트', () => {
  const categories = Object.values(CATEGORY)
    .slice(1)
    .map((category, i) => [i + 1, category]);
  test.each(categories)(
    '숫자에 따른 카테고리 이름으로 변환해준다.',
    (no, category) => {
      expect(convertNumberToCategory(no)).toEqual(category);
    }
  );
});
