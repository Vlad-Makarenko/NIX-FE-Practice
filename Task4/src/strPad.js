/**
 *
 * @param {String} input
 * @param {Number} fullLen
 * @param {String} fillStr
 * @param {String} fillType
 * @returns String
 */
const strPad = (input, fullLen, fillStr, fillType = "FILL_RIGHT") => {
  let result = "";
  const repeatCount = Math.ceil((fullLen - input.length) / fillStr.length);

  switch (fillType) {
    case "FILL_LEFT":
      result =
        fillStr.repeat(repeatCount).slice(0, fullLen - input.length) + input;
      break;
    case "FILL_BOTH":
      result =
        fillStr.repeat(repeatCount / 2).slice(0, (fullLen - input.length) / 2) +
        input +
        fillStr.repeat(repeatCount / 2).slice(0, (fullLen - input.length) / 2);
      break;
    default:
      result =
        input + fillStr.repeat(repeatCount).slice(0, fullLen - input.length);
      break;
  }
  return result;
};
