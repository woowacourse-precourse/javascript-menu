const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const OutputView = require('./OutpuView');
const Coach = require('./Coach');
const Recommend = require('./Recommend');

const InputView = {
    readCoaches(recommend) {
        Console.readLine('코치의 이름을 입력해 주세요. (, 로 구분)' + '\n', (names) => {
            const coachNames = names.split(',');
            console.log(coachNames)
            this.readDislikes(coachNames, recommend);
        });
    },

    readDislikes(coachNames, recommend) {
        let coachNamesArr = coachNames;
        let coaches = [];
        // let coachesArr = coachNamesArr.map((coachName) => new Coach(coachName));
        if (coachNamesArr[0] !== undefined) {
            coaches.unshift(new Coach(coachNamesArr[0]));
            Console.readLine(`${coachNamesArr[0]}가 못 먹는 메뉴를 입력해 주세요.` + '\n', (input) => {
                let menuNames = input.split(',');
                // coaches[0].setMenus();
                // console.log(coaches[0].menus);
                coaches[0].setDislikes(menuNames);
                console.log(coaches[0].dislikes);
                coaches[0].setLikes();

                console.log(coaches[0].likes);

                let randomArray = [];
                for (let i = 0; i < 5; i++) {
                    let randomNumber = Random.pickNumberInRange(1, 5);
                    randomArray.push(randomNumber);
                }
                console.log(randomArray)

                console.log(coaches[0].likes['일식'])

                randomArray.forEach(num => {
                    console.log(Random.shuffle(coaches[0].likes[num - 1])[0])
                })

                coachNamesArr.shift();
                this.readDislikes(coachNamesArr);
            });
        }
        if (coachNamesArr[0] === undefined) {

            let randomArray = [];
            for (let i = 0; i < 5; i++) {
                let randomNumber = Random.pickNumberInRange(1, 5);
                randomArray.push(randomNumber);
            }
            console.log(randomArray)

            console.log(recommend.coaches)


            randomArray.forEach(num => {
                console.log(Random.shuffle(recommend.coaches[0].likes[num - 1])[0])
            })


            OutputView.print('메뉴 추천 결과입니다.');


        }

    },



}
module.exports = InputView;