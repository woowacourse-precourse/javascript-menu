const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("../Constants");

const InputView = {
    readCoachsName(callback) {
        MissionUtils.Console.readLine('코치의 이름을 입력해주세요. (,로 구분)\n', (answer) => {
            const coachNameList = answer.split(',');
            try {
                this.invaildate_coachNameList(coachNameList);
            } catch(e) {
                MissionUtils.Console.print(e);
                this.readCoachsName(callback);
                return;
            }
            callback(coachNameList);
        });
    },
    invaildate_coachNameList(list) {
        if(list.length < constants.COACHNUMS.MINIMUM || list.length > constants.COACHNUMS.MAXIMUM) {
            throw `[ERROR] 코치는 최소 ${constants.COACHNUMS.MINIMUM}명, 최대 ${constants.COACHNUMS.MAXIMUM}명까지 식사를 함께합니다.`;
        }
        list.arrayforEach(name => {
            this.invaildate_coachName(name)
        });
    },
    invaildate_coachName(name) {
        if(name.length < constants.COACHNAME.MINIMUM  || name.length > constants.COACHNAME.MAXIMUM) {
            throw `[ERROR] 코치의 이름은 최소 ${constants.COACHNAME.MINIMUM}글자 최대 ${constants.COACHNAME.MAXIMUM}글자입니다.`;
        }
    },

    readHateFood(coachName, callback) {
        MissionUtils.Console.readLine(`${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`, (answer) => {
            const foodList = answer.split(',');

            callback(foodList);
        });
    },
}

module.exports = InputView;