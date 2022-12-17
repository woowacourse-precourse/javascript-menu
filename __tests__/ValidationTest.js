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

  test("못 먹는 음식 입력 유효성 검사", () => {
    const inputNotEatMenus = {
      correct: ["바나나,치킨"],
      incorrect: ["바나나,치킨,월남,쌈"],
    };

    inputNotEatMenus.correct.forEach((notEatMenu) => {
      expect(Validation.notEatMenu(notEatMenu)).toBeUndefined();
    });

    inputNotEatMenus.incorrect.forEach((notEatMenu) => {
      expect(() => Validation.notEatMenu(notEatMenu)).toThrow("[ERROR]");
    });
  });
});
