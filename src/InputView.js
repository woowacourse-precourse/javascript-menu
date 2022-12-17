const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const OutputView = require('./OutpuView');

const InputView = {
    readCoaches() {
        Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)' + '\n', (names) => {
            const coaches = names.split(',');
            console.log(coaches)
            this.readDislikes(coaches);
        });
    },

    readDislikes(coaches) {
        let coachesArr = coaches;
        if (coachesArr[0] !== undefined) {
            Console.readLine(`${coachesArr[0]}가 못 먹는 메뉴를 입력해 주세요.` + '\n', (menus) => {
                console.log(menus)
                coachesArr.shift();
                this.readDislikes(coachesArr);
            });
        }
        if (coachesArr[0] === undefined) {
            OutputView.print('메뉴 추천 결과입니다.');
        }

    }
}
module.exports = InputView;