const checkCoachNumber = (index) => {
  try {
    if (index > 5 || index < 2) throw new Error();
  } catch {
    console.log("[ERROR] 코치는 최소 2명 이상 입력해야 합니다.");
    return true;
  }
};

module.exports = {
  checkCoachNumber,
};
