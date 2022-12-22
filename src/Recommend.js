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
        namesArr.forEach((name, i, arr) => {
            let count = arr.filter(x => x === name).length;
            if (count > 1) throw new Error('[ERROR] 서로 다른 코치 이름만 입력 가능합니다.');
        })
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
        this.weekCategory.forEach((category) => {
            this.pushDayMenu(coach, category, bucket);
        })
        this.coachMenus.push({ name: coach.name, menu: bucket });
    }

    pushDayMenu(coach, category, bucket) {
        let shuffledDayMenu = this.shuffleMenu(category);
        let menu = shuffledDayMenu[0].trim();
        if (!coach.dislikes[category].includes(menu) && !bucket.includes(menu)) {
            bucket.push(menu);
        }
        else {
            this.pushDayMenu(coach, category, bucket);
        }
    }

    shuffleMenu(category) {
        let dayList = CONST.SAMPLE[category].split(',');
        let dayListIndex = dayList.map((x, i) => {
            let j = i + 1;
            return j++;
        });
        let shuffuledIndexArr = Random.shuffle(dayListIndex);
        let shuffledMenuArr = shuffuledIndexArr.map(j => dayList[j - 1]);
        return shuffledMenuArr;
    }


    addStep() {
        this.step += 1;
    }

}

module.exports = Recommend;