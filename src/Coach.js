const MissionUtils = require('@woowacourse/mission-utils');
const { Random } = MissionUtils;
const CONST = require('./Const');

class Coach {
    dislikes = {};
    likes = {};
    shuffled = {};
    #SAMPLE = CONST.SAMPLE;

    constructor(name) {
        this.name = name;
        this.isValidName(name);
    }

    isValidName(name) {
        if (name.length < 2 || name.length > 4) throw new Error('[ERROR] 이름은 최소 2글자, 최대 4글자만 입력 가능합니다.');
    }

    isValidMenu(name) {
        let fullList = [];
        for (let category in this.#SAMPLE) {
            let menu = this.#SAMPLE[category].split(',');
            fullList = [...fullList, ...menu];
        }
        // console.log(fullList)
        let fullListStr = fullList.join(',');
        if (!fullListStr.includes(name)) throw new Error('[ERROR] 메뉴 목록에 있는 음식만 입력 가능합니다.');
    }

    setDislikes(namesArr) {
        let dislikes = namesArr;
        for (let category in this.#SAMPLE) {
            this.dislikes[category] = [];
            dislikes.forEach(dislike => {
                this.isValidMenu(dislike);
                if (this.#SAMPLE[category].includes(dislike)) {
                    this.dislikes[category].push(dislike);
                }
            });
        }
    }

    setLikes() {
        for (let category in this.#SAMPLE) {
            let menuStr = this.#SAMPLE[category];
            this.dislikes[category].forEach(x => {
                menuStr = menuStr.replace(x, 'vanned');
            })
            this.likes[category] = menuStr.split(',').map(x => x.trim());
        }
    }

    shuffleLikes() {
        for (let category in this.likes) {
            let bucket = [];
            let indexArr = Random.shuffle(this.likes[category].map((_, i) => i++));
            bucket = indexArr.map(i => this.likes[category][i]).filter(x => x !== 'vanned');
            // console.log(bucket)
            this.shuffled[category] = bucket;
        }
    }
}

module.exports = Coach;