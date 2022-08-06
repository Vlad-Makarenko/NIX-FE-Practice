/**
 *
 * @param {String} str
 * @param {String} needle
 */
const findWord = (str, needle) => {
  let words = str.match(/[a-zA-Zа-яА-ЯіІїЇєЄ]*\S/g) || [];
  const splitedStr = words.map((word) => {
    const foundWords = word.match(needle) || [];
    if (foundWords.length) {
      return word;
    }
  });
  const result = splitedStr.filter((word) => word);
  return result[0];
};
