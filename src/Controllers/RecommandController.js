const Menu = require('../Models/Menu');
const CategoryGenerator = require('../Models/CategoryGenerator');
const MenuGenerator = require('../Models/MenuGenerator');

class ReccomandController {
    // 못 먹는 음식 리스트
    #foodList;
    // 전체 선택가능한 리스트
    #selectableMenu;
    // 선택된 메뉴 리스트
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

    selectMenu() {
        this.#selectableMenu = this.#menu.processSelectableMenu();
        // 전체 선택가능한 메뉴 순회
        Object.entries(this.#foodList).forEach(([coach, foods]) => {
            let selectableMenuIdx = 0;
            const indexList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            while(selectableMenuIdx !== 5) {
                const recommandedMenu = this.#selectableMenu[selectableMenuIdx][MenuGenerator.generate(indexList)-1]; // 랜덤 생성된 1-9 사이 숫자
                if(!foods.includes(recommandedMenu) && !this.#menu.haveSameMenu(coach, recommandedMenu)) {
                    this.#menu.saveRecommandedMenu(coach, recommandedMenu);
                    selectableMenuIdx++;
                }
            }
        })
    }

    getCategory() {
        return this.#menu.getCategory();
    }

    getRecommandedMenu() {
        return this.#menu.getRecommandedMenu();
    }
    
}

module.exports = ReccomandController;