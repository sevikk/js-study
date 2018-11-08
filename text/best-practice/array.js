// 1. Use explanatory variables

// Bad:

const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2]);

// Good:

const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);

/*----------------------------------------------*/

// 2. Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.

// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);

/*----------------------------------------------*/

// 3. Array Alternative: Sets

// So with a set instead of an array, we can turn this code:

var allChords = []; //this is outside the train function
// this is inside the train function
chords.forEach(chord => {
    if (!allChords.includes(chord)) {
        allChords.push(chord);
    }
});
into this code:
var allChords = new Set(); // this is outside the train function
// this is inside the train function
chords.forEach(chord => allChords.add(chord));