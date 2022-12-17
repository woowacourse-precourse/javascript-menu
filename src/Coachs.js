class Coachs {
    #coachs
    #notEat
    #coachMenu

    constructor(coachsArr) {
        this.#coachs = coachsArr
        this.#notEat = {}
        this.#coachMenu = {}
        this.setCoachMenu()
    }

    getCoachs() {
        return this.#coachs
    }

    getCoachMenus() {
        return this.#coachMenu
    }

    setCoachNotEat(i, foods) {
        this.#notEat[this.#coachs[i]] = foods
    }

    setCoachMenu() {
        this.#coachs.forEach(coach => {
            this.#coachMenu[coach] = []
        });
    }

    addCoachMenu(coach, food) {
        this.#coachMenu[coach].push(food)
    }

    isNotEatFood(coach, food) {
        return this.#notEat[coach].includes(food)
    }

}

module.exports = Coachs