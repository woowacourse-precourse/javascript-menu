const Validations = {
    validateLength(nameArr) {
        nameArr.forEach(element => {
            if (element.length<2 || element.length>4)throw new Error("[ERROR]")
        });
    },

    validateCount(nameArr) {
        if (nameArr.length < 2 || nameArr.length > 4) throw new Error("[ERROR]")
    }
}

module.exports = Validations