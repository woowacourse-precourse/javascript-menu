const constants = require("../Constants");

class Category {
    #list;

    constructor() {
        this.#list = [];
    }

    addRecommendCategory(category) {
        if(this.#countRecommendedCategoryNum(category) > constants.SAME_CATEGORY_COMMAND_MAIMAM) {
            return false;
        }
        this.#list.push(category);
        return true;
    }
    #countRecommendedCategoryNum(category) {
        let count = 0;
        for(let i; i < this.#list.length; i++) {
            if(this.#list[i] === category) {
                count += 1;
            }
        }
        return count;
    }

    toString() {
        const content = ['카테고리', ...this.#list];
        return '[ ' + content.join(' | ') + ' ]';
    }
}

module.exports = Category;