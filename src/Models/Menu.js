const { key } = require('../const/menu');

class Menu {

    #category = [];
    #stringCategory = [];
    #menu;

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
            this.#stringCategory.push(key[`${categoryNumber}`]);
        })
    }

    
}

module.exports = Menu;
