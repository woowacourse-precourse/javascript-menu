const coachNameCheck = (coach)=>{
  return coach.every((name)=>name.length>=2 && name.length<=4)
}

const coachNumberCheck = (coach)=>{
  return coach.length >=2 && coach.length <=5
}

const unableToEatCheck = (food)=>{
  return food.length>=0 && food.length<=2
}



module.exports = {
  coachNameCheck,
  coachNumberCheck,
  unableToEatCheck
};