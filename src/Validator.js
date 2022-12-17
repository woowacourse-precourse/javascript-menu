const OutputView = require("./OutputView");

const Validator = {
  readCoachName(coachName, coachNameArr) {
    const hangeul = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(coachName.replace(/,/g, ""));
    const nameDuplication = new Set(coachNameArr);
    // coachNameArr.forEach((name) => {
    //   if (name < 2 || name > 4) return;
    // });

    try {
      if (!hangeul) throw Error; //한글과 ,로만 이루어지지 않은 경우
      // for (idx = 0; idx < coachNameArr.length; idx++) {
      //   console.log(coachNameArr[idx]);
      //   if (coachNameArr[idx] < 2 || coachNameArr[idx] > 4) throw Error;
      //   console.log(coachNameArr[idx]);
      // } //코치 이름 길이 오류
      if (coachNameArr.length < 2 || coachNameArr.length > 5) throw Error; //코치 인원 오류
      if (nameDuplication.size !== coachNameArr.length) throw Error; //코치 이름 중복 오류
      return true;
    } catch (e) {
      OutputView.printError();
      return false;
    }
  },
};

module.exports = Validator;
