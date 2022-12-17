class GetOccurrence {
  static get(array, value) {
    return array.filter((v) => v === value).length;
  }
}

module.exports = GetOccurrence;
