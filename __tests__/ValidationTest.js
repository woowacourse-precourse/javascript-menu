const Validation = require("../src/Validation");

describe("입력값 유효성 검사 테스트", () => {
  test("코치 이름 입력 유효성 검사", () => {
    const inputCoachNames = {
      correct: ["은총,소현"],
      incorrect: ["은총", "은,총"],
    };

    inputCoachNames.correct.forEach((coachNames) => {
      expect(Validation.coachNames(coachNames)).toBeUndefined();
    });

    inputCoachNames.incorrect.forEach((coachNames) => {
      expect(() => Validation.coachNames(coachNames)).toThrow("[ERROR]");
    });
  });
});
