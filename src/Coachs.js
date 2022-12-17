class Coachs {
    #coachs
    #notEat

    constructor(coachsArr) {
        this.#coachs = coachsArr
        this.#notEat = {}
    }

    getCoachs() {
        return this.#coachs
    }

    setCoachNotEat(i, foods) {
        this.#notEat[this.#coachs[i]] = foods
        console.log(this.#notEat)
    }

}

module.exports = Coachs