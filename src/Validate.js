const { ERROR, COACH } = require('./Constants');

const validateNumberOfCoach = (number) => {
  if (number < COACH.MIN || number > COACH.MAX) {
    throw new Error(ERROR.NUM_OF_COACH);
  }
};

const validateCoaches = (input) => {
  const coaches = input.split(',');
  validateNumberOfCoach(coaches.length);
};

// const validateCoache = (coach) => {
// 	if ()
// }

module.exports = {
  validateCoaches,
};
