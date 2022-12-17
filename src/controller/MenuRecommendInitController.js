const InputView = require("../view/InputView");
const MenuRecommend = require("../model/MenuRecommend");
const Coach = require("../model/Coach");

const MenuRecommendController = require("./controller/MenuRecommendController");

class MenuRecommendInitController {
    #menuRecommend;
    #coachs;

    constructor(menu) {
        this.#menuRecommend = new MenuRecommend(menu);
        this.#categorys = [];
        this.#coachs = [];
    }

    exetute() {
        this.createCoachs(() => {
            const controller = new MenuRecommendController(this.#menuRecommend, this.#coachs);
            controller.exetute();
        });
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

module.exports = MenuRecommendInitController;