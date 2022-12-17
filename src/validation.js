const checkCoachNumber = (index) => {
  try {
    if (index > 5 || inex < 2) throw new Error();
  } catch {
    console.log("[ERROR]");
    return true;
  }
};

module.exports = {
  checkCoachNumber,
};
