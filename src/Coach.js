
class Coach {
    #name
    #notEat
    #weekMenu

    constructor(name) {
        this.#name = name;
        this.#weekMenu = [];
    }

    get name() {
        return this.#name;
    }

    isNotEat(foods) { //arr
        this.#notEat = foods;
    }

    addMenu(menu) {
        if (this.menuValidate(menu)) {
            this.#weekMenu.push(menu);
            return true
        }
        return false
    }

    menuValidate(menu) { //못먹거나 이미 있는 음식이면 false, 먹을 수 있으면 true
        return ((!this.#weekMenu.includes(menu)) && (!this.#notEat.includes(menu)))
    }

    printMenu() {
        return [this.#name, this.#weekMenu];
    }

}

module.exports = Coach;