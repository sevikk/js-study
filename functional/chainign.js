// v.1

/* const nextCharForNumberString = (string) => {
  const trimmed = string.trim();
  const number = Number(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
}; */

// v.2

/* const nextCharForNumberString = (string) => 
  String.fromCharCode( Number( string.trim() ) + 1); */

// v.3

/* const nextCharForNumberString = (string) => 
  [string]
    .map(i => i.trim())
    .map(i => Number(i) + 1)
    .map(i => String.fromCharCode(i)) */

// v.4

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => console.log(x)
  });
  
  const nextCharForNumberString = (string) =>
    Box(string)
    .map(i => i.trim())
    .map(i => Number(i) + 1)
    .inspect()
    .map(i => String.fromCharCode(i))
    .fold(i => i.toLowerCase())
  
  
  console.log(nextCharForNumberString(' 64 '));