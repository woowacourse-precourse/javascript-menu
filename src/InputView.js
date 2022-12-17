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
                // console.log(coaches[0].dislikes);
                coaches[0].setLikes();

                OutputView.print(coaches[0].likes);
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


            randomArray.forEach(num => {
                let category;
                if (num === 1) {
                    category === '일식';
                    console.log(Random.shuffle(recommend.coaches[0].likes[category])[0])
                }

                if (num === 1) {
                    category === '일식';
                    console.log(Random.shuffle(recommend.coaches[0].likes[category])[0])
                }
                if (num === 2) {
                    category === '한식';
                    console.log(Random.shuffle(recommend.coaches[0].likes[category])[0])
                }
                if (num === 3) {
                    category === '중식';
                    console.log(Random.shuffle(recommend.coaches[0].likes[category])[0])
                }
                if (num === 4) {
                    category === '아시안';
                    console.log(Random.shuffle(recommend.coaches[0].likes[category])[0])
                }
                if (num === 5) {
                    category === '양식';
                    console.log(Random.shuffle(recommend.coaches[0].likes[category])[0])
                }

            })

            OutputView.print('메뉴 추천 결과입니다.');
            OutputView.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
            OutputView.print('추천을 완료했습니다.');
        }

    },



}
module.exports = InputView;