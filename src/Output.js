const Message = require('./Message');
const { Console , Random } = require("@woowacourse/mission-utils");

const printCategories = (dayCategories) => {
    let stringCategories = "";
    stringCategories += `[ ${Message.INPUT_MESSAGE.CATEGORIE}`;

    for(let day=0 ; day<5 ; day++) {
        stringCategories += " | "
        stringCategories += dayCategories[day];
    }
    stringCategories += " ]";

    Console.print(stringCategories);
}

const printCoachEatList = (name, coachEatObject) => {
    let eatString = "";
    eatString += `[ ${name}`;
    
    const coachFood = coachEatObject[name];
    coachFood.forEach(fd => {
        eatString += " | ";
        eatString += fd;
    })

    eatString += " ]";

    Console.print(eatString);
}

module.exports = {printCategories, printCoachEatList};