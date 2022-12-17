const MU = require("@woowacourse/mission-utils");
const OutputView = {
    /**
     * 전체 결과 출력
     */
    printMenu(COACH, category, pickMenu) {
        const MenuCategory =['일식', '한식', '중식', '아시안', '양식'];
        MU.Console.print('\n메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
        let dayOfCategory = [];
        for(let i = 0; i< 5; i++) {
            dayOfCategory[i] = MenuCategory[category[i]-1];
        }
        MU.Console.print(`[ 카테고리 | ${dayOfCategory.join(' | ')} ]`);
        for(let i = 0; i < COACH.length; i++) {
            MU.Console.print(`[ ${COACH[i]} | ${pickMenu[i].join(' | ')} ]`);
        }
        this.printEnd();
    },
    /**
     * 시작 문장 출력
     */
    printStart() {
        MU.Console.print('점심 메뉴 추천을 시작합니다.\n');
    },
    /**
     * 마지막 문장 출력
     */
    printEnd() {
        MU.Console.print('\n추천을 완료했습니다.');
        return MU.Console.close();
    },
    printError(e) {
        MU.Console.print(e);
    }
};

module.exports = OutputView;