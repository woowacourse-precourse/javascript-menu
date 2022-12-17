const Validations = {
    validateLength(nameArr) {
        nameArr.forEach(element => {
            if (element.length<2 || element.length>4)throw new Error("[ERROR]")
        });
    }
}

module.exports = Validations