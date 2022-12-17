const { MEMBER } = require('../constants/member');
const { ERROR_MESSAGES } = require('../constants/messages');

class Validator {
  checkCoachMemberCount(memberCount) {
    if (memberCount < MEMBER.minCount || memberCount > MEMBER.maxCount) {
      throw ERROR_MESSAGES.invalidMemberCount;
    }
    return true;
  }

  checkCoachNameLength(coachMembers) {
    coachMembers.forEach((name) => {
      if (name.length < MEMBER.minNameLength || name.length > MEMBER.maxNameLength) {
        throw ERROR_MESSAGES.invalidNameLength;
      }
      return true;
    });
  }

  checkSeperator(coachMembers) {
    // 콤마가 구분자가 아닌 경우 예외처리
  }

  checkUnableToEatMenuLength(unableToEatMenu) {
    if (unableToEatMenu.split(',').length > MEMBER.maxUnableToEatMenuLength) {
      throw ERROR_MESSAGES.invalidUnableToEatMenuLength;
    }
    return true;
  }
}

module.exports = Validator;
