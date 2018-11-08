/*------------------- Variables ---------------------*/

// 1. Use meaningful variable names

const yyyymmdstr = moment.format('YYYY/MM/DD');

// ->

const yearsMonthDay = moment.format('YYYY/MM/DD');

/*----------------------------------------------*/

// 2. Remove obvious data

getUserData();

// ->

getUser();

/*----------------------------------------------*/

// 3. No magid numbers

for (let i = 0; i < 525600; i += 1) {
    runCron();
}

// ->

const minutesInYear = 525600;
for (let i = 0; i < minutesInYear; i += 1) {
    runCron();
}

/*----------------------------------------------*/

// 4. Use explanatory variables

const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2]);

// ->

const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);

/*----------------------------------------------*/

// 5. Avoid Mental Mapping

const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((l) => {
    doStuff();
    doSomeOtherStuff();
    // ...
    // ...
    // ...
    // Wait, what is `l` for again?
    dispatch(l);
});

// ->

const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((location) => {
    doStuff();
    doSomeOtherStuff();
    // ...
    // ...
    // ...
    dispatch(location);
});

/*----------------------------------------------*/

// 6. Don't add unneeded context

const Car = {
    carMake: 'Honda',
    carModel: 'Accord',
    carColor: 'Blue'
};

function paintCar(car) {
    car.carColor = 'Red';
}

// ->

const Car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
};

function paintCar(car) {
    car.color = 'Red';
}

/*----------------------------------------------*/

// 7. Use default arguments instead of short circuiting or conditionals

function createMicrobrewery(name) {
    const breweryName = name || 'Hipster Brew Co.';
    // ...
}

// ->

function createMicrobrewery(name = 'Hipster Brew Co.') {
    // ...
}