const MissionUtils = require('@woowacourse/mission-utils');
const findFoodLocation = require('../src/utils/findFoodLocation');
const getCategory = require('../src/utils/getCategory');
const getSuggestMenu = require('../src/utils/getSuggestMenu');
const verify = require('../src/utils/verify');

describe('유틸함수 테스트 모음', () => {
  test('음식 위치 찾기 유틸함수', () => {
    expect(findFoodLocation('규동,우동')).toEqual([
      [0, 0],
      [0, 1],
    ]);
  });

  test('카테고리 목록 생성 유틸함수 테스트코드', () => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(2);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(5);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(2);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(1);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(2);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(4);
    expect(getCategory(verify.moreThanTwoData)).toEqual([1, 4, 1, 0, 3]);
  });

  test('카테고리 메뉴 반환을 위한 유틸함수 테스트코드', () => {
    const sequenced = (_, idx) => idx + 1;

    MissionUtils.Random.shuffle = jest.fn();
    MissionUtils.Random.shuffle.mockReturnValueOnce([3, Array.from({ length: 8 }, sequenced)]);
    expect(getSuggestMenu(0)).toBe('미소시루');
  });
});

describe('검증 관련 유틸함수 테스트코드', () => {
  test('카테고리 지정 시 한 카테고리가 두 번 이상 들어감 여부 검증 유틸함수', () => {
    expect(verify.moreThanTwoData(2, [1, 2, 3, 4])).toBe(false);
    expect(verify.moreThanTwoData(4, [1, 2, 4, 4])).toBe(true);
  });

  test('입력받은 이름의 수가 2개 미만 혹은 5개 이상이라면 throw', () => {
    expect(() => {
      verify.nameCount('abc,cba,haha,hoho,dooo,qwer');
    }).toThrow();
  });

  test('들어온 이름들 중 이름 길이가 2~4를 벗어나는 이름이 있다면 throw', () => {
    expect(() => {
      verify.nameLengthCount('aaaaa,aaa');
    }).toThrow();
  });

  test('들어온 입력값 중 존재하지 않는 메뉴가 들어온다면 throw', () => {
    expect(() => {
      verify.existMenu('우동, 삼겹살');
    }).toThrow();
  });

  test('못 먹는 음식이 2개 이상일 경우 throw', () => {
    expect(() => {
      verify.unableMenuLength('우동, 규동, 스파게티');
    }).toThrow();
  });
  test('이미 두 번 먹은 음식 여부 검증을 위한 유틸함수', () => {
    expect(verify.eatenTwice(['우동', '우동'], '우동')).toBe(true);
  });
});
