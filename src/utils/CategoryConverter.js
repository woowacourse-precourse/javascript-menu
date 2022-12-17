class CategoryConverter {
  static convert(koreanName) {
    if (koreanName === "일식") return "JAPANESE";
    if (koreanName === "한식") return "KOREAN";
    if (koreanName === "중식") return "CHINESE";
    if (koreanName === "아시안") return "ASIAN";
    if (koreanName === "양식") return "WESTERN";
  }
}

module.exports = CategoryConverter;
