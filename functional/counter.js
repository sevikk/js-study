const counter = (data) => () => data++;

const count = counter(0);
console.log(count());
console.log(count());
console.log(count());