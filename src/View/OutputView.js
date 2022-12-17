const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printResult(recommendResults, coaches) {
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    Console.print("[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안]");
    recommendResults.forEach((menuInfo, index) => {
      const result = `[ ${coaches[index]} | ${menuInfo[0].menu} | ${menuInfo[1].menu} | ${menuInfo[2].menu} | ${menuInfo[3].menu} | ${menuInfo[4].menu} ]`;
      Console.print(result);
    });
  },
};

module.exports = OutputView;
