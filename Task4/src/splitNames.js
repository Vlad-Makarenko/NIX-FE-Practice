/**
 *
 * @param {String} names
 */
const splitNames = (names) => {
  const users = names.match(/[a-zA-Z, ]+/g);
  const result = users.map((user) =>
    user
      .match(/[a-zA-Z]+/g)
      .reverse()
      .join(" ")
  );
  return result.join("\n");
};
