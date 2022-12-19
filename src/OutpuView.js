const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;

const OutputView = {
    print(str) {
        Console.print(str);
    },

    printResult(recommend) {
        OutputView.print('\n' + '메뉴 추천 결과입니다.');
        OutputView.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');

        let weekCategoryStr = recommend.weekCategory.join(' | ');
        OutputView.print(`[ 카테고리 | ${weekCategoryStr} `);

        recommend.coachMenus.forEach(coachMenu => {
            let coachMenuStr = coachMenu.menu.join(' | ');
            OutputView.print(`[ ${coachMenu.name} | ${coachMenuStr} ]`);
        })

        OutputView.print('\n' + '추천을 완료했습니다.');
    },

    end() {
        Console.close();
    }
}

module.exports = OutputView;