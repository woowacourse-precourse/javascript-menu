const { KEY, MENU } = require('../const/menu');

class Menu {

    #category = [];
    #stringCategory = [];
    #selectableMenu = [];
    #recommandedMenu = {};

    addCategory(number) {
        this.#category.push(number);
    }
    
    isCategoryHaveTwo(number) {
        let count = this.#category.filter(category => number === category).length;
        return count === 2 ? true : false;
    }

    isCategoryLength() {
        return this.#category.length === 5;
    }

    matchCategory() {
        this.#category.forEach((categoryNumber) => {
            this.#stringCategory.push(KEY[`${categoryNumber}`]);
        })
    }

    processSelectableMenu() {
        this.#stringCategory.forEach((category) => {
            this.#selectableMenu.push(MENU[`${category}`].split(', '));
        })
        return this.#selectableMenu;
    }

    saveRecommandedMenu(coach, menu) {
        if(this.#recommandedMenu[`${coach}`] === undefined) this.#recommandedMenu[`${coach}`] = [menu];
        else this.#recommandedMenu[`${coach}`] = [...this.#recommandedMenu[`${coach}`], menu];
    }

    haveSameMenu(coach, menu) {
        if(this.#recommandedMenu[`${coach}`] && this.#recommandedMenu[`${coach}`].includes(menu)) return true;
        return false;
    }

    getRecommandedMenu() {
        return this.#recommandedMenu;
    }

    getCategory() {
        return this.#stringCategory;
    }
}

module.exports = Menu;
