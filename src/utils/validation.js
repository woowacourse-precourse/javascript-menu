const coachNameCheck = (coach)=>{
  return coach.split(",").every((name)=>name.length>=2 && name.length<=4)
}

const coachNumberCheck = (coach)=>{
  return coach.split(",").length >=2 && coach.split(",").length <=5
}

const unableToEatCheck = (food)=>{
  return food.split(",").length>=0 && food.split(",").length<=2
}



module.exports = {
  coachNameCheck,
  coachNumberCheck,
  unableToEatCheck
};