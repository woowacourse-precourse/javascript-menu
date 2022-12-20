const MissionUtils = require('@woowacourse/mission-utils');
const { Random } = MissionUtils;
const CONST = require('./Const');

class Recommend {
    step = 0;
    weekCategory;
    coachMenus = [];
    #indexArr = [];

    constructor(namesArr) {
        this.coachNames = namesArr;
        this.numberOfCoaches = namesArr.length;
        this.setIndexArr();
        this.isValidMembers(namesArr);
    }

    isValidMembers(namesArr) {
        if (namesArr.length < 2 || namesArr.length > 5) throw new Error('[ERROR] 코치는 최소 2명, 최대 5명까지 입력 가능합니다.');
    }

    setIndexArr() {
        for (let i = 0; i < 5; i++) {
            this.pushRandom(this.#indexArr);
        }
        this.setWeekCategory();
    }

    pushRandom(randomArray) {
        let randomNumber = Random.pickNumberInRange(1, 5);
        let count = randomArray.filter(x => x === randomNumber).length;
        if (count < 2) {
            randomArray.push(randomNumber);
        }
        if (count >= 2) {
            this.pushRandom(randomArray);
        }
    }

    setWeekCategory() {
        let categoryArr = ['',];
        for (let category in CONST.SAMPLE) {
            categoryArr.push(category)
        }
        // console.log(categoryArr)
        this.weekCategory = this.#indexArr.map((i) => categoryArr[i]);
    }

    setCoachMenus(coach) {
        let bucket = [];
        this.weekCategory.forEach((category, i) => {
            let first = coach.shuffled[category][0];
            let second = coach.shuffled[category][1];
            if (!bucket.includes(first)) {
                bucket.push(first);
            }
            else {
                bucket.push(second);
            }
        });
        this.coachMenus.push({ name: coach.name, menu: bucket });
    }

    addStep() {
        this.step += 1;
    }

}

module.exports = Recommend;