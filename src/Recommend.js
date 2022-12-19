const MissionUtils = require('@woowacourse/mission-utils');
const { Random } = MissionUtils;

class Recommend {
    step = 0;
    weekCategory;
    coachMenus = [];
    #indexArr = [];
    #CATEGORY = ['', '일식', '한식', '중식', '아시안', '양식']

    constructor(namesArr) {
        this.coachNames = namesArr;
        this.numberOfCoaches = namesArr.length;
        this.setindexArr();
        this.isValidMember(namesArr);
    }

    isValidMember(namesArr) {
        if (namesArr.length < 2 || namesArr.length > 5) throw new Error('[ERROR] 코치는 최소 2명, 최대 5명까지 입력 가능합니다.');
    }

    setindexArr() {
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
        this.weekCategory = this.#indexArr.map((i) => this.#CATEGORY[i]);
        // console.log(this.weekCategory)
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

    // setRandomMenu() {
    //     this.randomMenu = this.#indexArr.map((i) => {
    //         let pickedIndex = Random.shuffle(this.#likesIndexed[i].map((_, j) => j++))[0];
    //         return this.#likesIndexed[i][pickedIndex];
    //     })
    // }

    addStep() {
        this.step += 1;
    }

}

module.exports = Recommend;