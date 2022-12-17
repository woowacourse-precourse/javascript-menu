const CONST = require('./Const');

class Coach {
    likes = {};
    dislikes = {};
    #SAMPLE = CONST.SAMPLE;
    japanese = this.#SAMPLE['일식'];
    korean = this.#SAMPLE['한식'];
    chinese = this.#SAMPLE['중식'];
    asian = this.#SAMPLE['아시안'];
    western = this.#SAMPLE['양식'];

    constructor(name) {
        this.name = name;
        this.menu = {
            '일식': this.japanese,
            '한식': this.korean,
            '중식': this.chinese,
            '아시안': this.asian,
            '양식': this.western,
        }
        console.log(this.menu)
    }

    setMenus() {
        for (let category in this.#SAMPLE) {
            this.menus.push(this.#SAMPLE[category].split(','));
        }
    }

    setDislikes(menuNames) {
        let dislikes = menuNames;
        for (let category in this.#SAMPLE) {
            this.dislikes[category] = [];
            dislikes.forEach(dislike => {
                if (this.#SAMPLE[category].includes(dislike)) {
                    this.dislikes[category].push(dislike);
                }
            })
        }
    }

    setLikes() {
        for (let category in this.menu) {
            let str = this.menu[category].replace(this.dislikes[category][0], '').replace(this.dislikes[category][1], '');
            let arr = str.split(',').filter(x => x !== '').filter(x => x !== ' ');
            this.likes[category] = arr;
        }
    }
}

module.exports = Coach;