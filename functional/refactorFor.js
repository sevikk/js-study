const isKitten = cat => cat.months < 7
const getName = cat => cat.name
const getKittenNames = cats =>
  cats.filter(isKitten)
      .map(getName)
const cats = [
  { name: 'Mojo',    months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Waffles', months: 4 },
  { name: 'Pickles', months: 6 }
]
const kittens = getKittenNames(cats)
console.log(kittens)

//instead this

const isKitten = cat => cat.months < 7
const getName = cat => cat.name
var kittens = []
for (var i = 0; i < cats.length; i++) {
  if (isKitten(cats[i])) {
    kittens.push(getName(cats[i]))
  }
}