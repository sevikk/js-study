// 1. Don't over-optimize

// Bad:

// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}
// Good:

for (let i = 0; i < list.length; i++) {
  // ...
}

/*------------------------------------------------------------*/

// 2. optimize cycle

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}