const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const OutputView = require('./OutpuView');
const Coach = require('./Coach');
const Recommend = require('./Recommend');

const InputView = {
    readCoaches() {
        Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)' + '\n', (names) => {
            this.tryCoaches(names);
        })
    },

    tryCoaches(names) {
        try {
            const namesArr = names.split(',').map(x => x.trim());
            const recommendInfo = new Recommend(namesArr);
            this.setCoaches(recommendInfo);
        }
        catch (err) {
            OutputView.print(err);
            this.readCoaches();
        }
    },

    setCoaches(recommendInfo) {
        try {
            const coaches = recommendInfo.coachNames.map(name => new Coach(name));
            this.readDislikes(coaches, recommendInfo);
        }
        catch (err) {
            OutputView.print(err);
            this.readCoaches();
        }
    },

    readDislikes(coaches, recommendInfo) {
        if (recommendInfo.step < recommendInfo.numberOfCoaches) {
            let coach = coaches[recommendInfo.step];
            Console.readLine('\n' + `${coach.name}(이)가 못 먹는 메뉴를 입력해 주세요.` + '\n', (input) => {
                this.tryDislikes(input, coach, coaches, recommendInfo);
            });
        }

        if (recommendInfo.step === recommendInfo.numberOfCoaches) {
            OutputView.printResult(recommendInfo);
            // console.log(recommendInfo)
            // console.log(recommendInfo.coachMenus[0].menu)
            OutputView.end();
        }
    },

    tryDislikes(input, coach, coaches, recommendInfo) {
        try {
            let namesArr = input.split(',').map(x => x.trim());
            coach.setDislikes(namesArr);
            // coach.setLikes();
            // coach.shuffleLikes();
            recommendInfo.setCoachMenus(coach);
            recommendInfo.addStep();
            this.readDislikes(coaches, recommendInfo);
        }
        catch (err) {
            OutputView.print(err);
            this.readDislikes(coaches, recommendInfo);
        }
    }
}
module.exports = InputView;