const Console = require('./utils/Console');

const OutputView = {
  printResult(userName, menus) {
    const array = [];
    const menu = userName.map((value, index) =>
      menus.filter((v, i) => array.push(v[index]))
    );

    Console.print(
      `\n메뉴 추천 결과입니다.`,
      `[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`,
      `[카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]`
    );

    Console.print(
      `[ ${userName[0]}| ${array
        .splice('')
        .slice(0, menus.length)
        .join(' | ')}]`
    );
    Console.print(`\n추천을 완료했습니다.`);
  },
};

module.exports = OutputView;
