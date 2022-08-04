const substrCount = (input, needle, offset = 0, length = 0) => {
  if (typeof input !== "string") {
    return -1;
  }
  let buffer = length > 0 ? input.slice(offset, offset + length) : input.slice(offset);
  return buffer.split(needle).length - 1;
};
