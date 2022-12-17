const Coach = require("../src/model/Coach");

describe("코치 클래스 테스트", () => {
  test("코치 인원이 2명보다 적으면 예외가 발생한다", () => {
    expect(() => {
      new Coach("포비");
    }).toThrow("[ERROR] 코치 인원은 최소 2명, 최대 5명이어야 합니다");
  });

  test("코치 인원이 5명이 초과 될 경우 예외가 발생한다.", () => {
    expect(() => {
      new Coach("대한,민국,만세,오필,승코,리아");
    }).toThrow("[ERROR] 코치 인원은 최소 2명, 최대 5명이어야 합니다");
  });

  test("코치 이름이 최소 2글자, 최대 4글자가 아닐 경우 예외가 발생한다", () => {
    expect(() => {
      new Coach("포비,에르난데스,포포");
    }).toThrow("[ERROR] 코치 이름은 최소 2글자, 최대 4글자이어야 합니다");
  });
});
