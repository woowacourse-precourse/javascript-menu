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

    setCoachNotEat(i, foods) {
        this.#notEat[this.#coachs[i]] = foods
        console.log(this.#notEat)
    }

    setCoachMenu() {
        this.#coachs.forEach(coach => {
            this.#coachMenu[coach] = []
        });
    }

    addCoachMenu(coach, food) {
        this.#coachMenu[coach].push(food)
        console.log(this.#coachMenu)
    }

    isNotEatFood(coach, food) {
        return this.#notEat[coach].includes(food)
    }

}

module.exports = Coachs