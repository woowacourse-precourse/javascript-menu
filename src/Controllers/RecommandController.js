const Menu = require('../Models/Menu');
const CategoryGenerator = require('../Models/CategoryGenerator');

class ReccomandController {
    // 못 먹는 음식 리스트
    #foodList;
    #menu;

    constructor(foodList) {
        this.#foodList = foodList;
        this.#menu = new Menu();
        this.startRecommand();
    }

    startRecommand() {
        this.selectCategory();
        this.selectMenu();
    }

    selectCategory() {
        while(!this.#menu.isCategoryLength()) {
            const randNum = CategoryGenerator.generate();
            if(this.#menu.isCategoryHaveTwo(randNum)) continue;
            else this.#menu.addCategory(randNum);
        }
        this.#menu.matchCategory();
    }
}

module.exports = ReccomandController;