const { MEMBER } = require('../constants/member');
const { ERROR_MESSAGES } = require('../constants/messages');

class Validator {
  checkCoachMemberCount(memberCount) {
    if (memberCount < MEMBER.minCount || memberCount > MEMBER.maxCount) {
      throw ERROR_MESSAGES.invalidMemberCount;
    }
    return true;
  }

  checkCoachNameLength(coachMembers) {}

  checkSeperator() {
    // 콤마가 구분자가 아닌 경우 예외처리
  }
}

module.exports = Validator;
