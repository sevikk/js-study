/*old way*/

let first5Kittens = [];
const cats = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < cats.length; i++) {
    first5Cats.push(cats[i])
    if (first5Cats.length >= 5) {
        break
    }
}

/* new way */

const cats = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const first5Cats = cats
    .filter((item, index) => index <= 5)


/* advance */

const cats = [
    { name: 'Mojo', months: 84 },
    { name: 'Mao-Mao', months: 34 },
    { name: 'Waffles', months: 4 },
    { name: 'Pickles', months: 6 }
];

const isKitten = cat => cat.months < 7;
const isFirst = item => item < 1;

const getFirstKitten = cats =>
    cats
        .filter(item => isKitten(item))
        .filter((item, index) => isFirst(index))

