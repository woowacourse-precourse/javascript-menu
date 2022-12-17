const CategoryMaker = {
  makeCategory(generateRandomNumber) {
    let count = 0;
    const categoryArr = [];
    while (count < 5) {
      let randomNum = Number(generateRandomNumber());
      switch (randomNum) {
        case 1:
          categoryArr.push('일식');
          break;
        case 2:
          categoryArr.push('한식');
          break;
        case 3:
          categoryArr.push('중식');
          break;
        case 4:
          categoryArr.push('아시안');
          break;
        case 5:
          categoryArr.push('양식');
          break;
      }
      count++;
    }
    return categoryArr;
  },
};

module.exports = CategoryMaker;
