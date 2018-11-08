const charsPlus =
  (chars, fn) => [...chars].map((char) =>
    String.fromCharCode(fn(char.charCodeAt(0))));

const plus1 = (value) => value + 1;
console.log(charsPlus('abc', plus1));