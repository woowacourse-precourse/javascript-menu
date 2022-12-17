const MissionUtils = require('@woowacourse/mission-utils');
const Recommend = require('../src/Recommend');
const InputView = require('../src/InputView');

describe("Recommend 클래스 테스트", () => {
  test("이름과 메뉴가 잘 등록되는지 테스트", () => {
    const recommend = new Recommend("남상규,김민수");

    recommend.setMenus("남상규", "굴,해삼");
    const coach = recommend.getCoach();
    expect(coach["남상규"][0][1]).toEqual("해삼");
  });
});
