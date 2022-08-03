/**
 *
 * @param {String} str
 * @returns {Boolean}
 */
const testString = (str) => {
  if (typeof str !== "string") {
    return false;
  } else {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "(" || str.charAt(i) === "[") {
        stack.push(str.charAt(i));
      }
      if (str.charAt(i) === ")") {
        if (stack[stack.length - 1] !== "(") {
          return false;
        }
        stack.pop();
      } else if (str.charAt(i) === "]") {
        if (stack[stack.length - 1] !== "[") {
          return false;
        }
        stack.pop();
      }
    }
    if (stack.length) {
      return false;
    }
  }
  return true;
};

