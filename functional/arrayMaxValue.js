// great concept of this is that we separate logic from functions

const toMax = (max, number) => Math.max(max, number);

const max = [1, 2, 3, 4].reduce(toMax);