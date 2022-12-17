const OutputView = require("./OutputView");

const Validator = {
  readCoachName(coachName, coachNameArr) {
    const hangeul = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(coachName.replace(/,/g, ""));
    const nameDuplication = new Set(coachNameArr);

    try {
      if (!hangeul) throw Error; //한글과 ,로만 이루어지지 않은 경우
      for (let idx = 0; idx < coachNameArr.length; idx++) {
        if (coachNameArr[idx].length < 2 || coachNameArr[idx].length > 4) throw Error;
      } //코치 이름 길이 오류
      if (coachNameArr.length < 2 || coachNameArr.length > 5) throw Error; //코치 인원 오류
      if (nameDuplication.size !== coachNameArr.length) throw Error; //코치 이름 중복 오류
      return true;
    } catch (e) {
      OutputView.printError();
      return false;
    }
  },

  readInedibleMenu(inedibleMenu) {
    const hangeul = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(inedibleMenu.replace(/,/g, ""));
    try {
      if (!hangeul) throw Error; //한글과 ,로만 이루어지지 않은 경우
      return true;
    } catch (e) {
      OutputView.printError();
      return false;
    }
  },
};

module.exports = Validator;
