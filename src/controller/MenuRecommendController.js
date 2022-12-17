const InputView = require("../view/InputView");

const MenuRecommend = require("../model/MenuRecommend");
const Category = require("../model/Category");
const Coach = require("../model/Coach");

class MenuRecommendController {
    #menuRecommend;
    #categorys;
    #coachs;

    constructor(menu) {
        this.#menuRecommend = new MenuRecommend(menu);
        this.#categorys = [];
        this.#coachs = [];
    }

    exetute() {
        this.createCoachs();
    }
    createCoachs(callback) {
        InputView.readCoachsName((result) => {
            result.array.forEach(name => {
                this.readHateFoodByName(name);
            });
            callback();
        });
    }
    readHateFoodByName(name) {
        InputView.readHateFood(name, (result) => {
            this.#coachs.add(new Coach(name, result));
        });
    }
}

module.exports = MenuRecommendController;