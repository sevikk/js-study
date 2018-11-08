const switchcase = (cases, defaultCase, key) => {
    if (cases.hasOwnProperty(key)) {
        return cases[key]
    } else {
        return defaultCase
    }
};

//example 1
const counter = (state = 0, action) =>
    switchcase({
        'INCREMENT': state + 1,
        'DECREMENT': state -1
    })(state)(action.type);

//example 2

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

// ->

const getDay = switchcase({
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
})('Unknown');

// example 3

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDays = switchcase(
    days.reduce((acc, value) =>
        (acc[value] = `The day is ${value}.`, acc), {})
)("I don't know what day it is.");
console.log(getDays('Monday'));