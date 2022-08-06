/**
 *
 * @param {String} str
 * @param {String} needle
 */
const findWord = (str, needle) => {
  const splitedStr = str.split(" ").map((word) => {
    const foundWords = word.match(needle) || [];
    if (foundWords.length) {
      return word;
    }
  });
  const result = splitedStr.filter((word) => word);
  return result[0];
};

