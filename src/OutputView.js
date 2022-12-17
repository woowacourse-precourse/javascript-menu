const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMent() {
    Console.print("점심 메뉴 추천을 시작합니다.");
  },

  printError() {
    Console.print("[ERROR] 입력 형식을 지켜야합니다.");
  },

  printRecommedResult(){
    Console.print("메뉴 추천 결과입니다.\n")
    Console.print([ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ])
    Console.print([ 카테고리 | ${menu} ])
    Console.print([ ${name} | ${menu} ])
    Console.print([ ${name} | ${menu} ])
    Console.print([ ${name} | ${menu} ])
  },

  printEndGameMent(){
    Console.print("추천을 완료했습니다.");
  }
};

module.exports = OutputView;
