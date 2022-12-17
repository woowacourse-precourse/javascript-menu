const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

const OutputView = {
    print(str) {
        Console.print(str);
    },

    end() {
        Console.close();
    }
}

module.exports = OutputView;