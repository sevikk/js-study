// 1. Note: ECMA-262 defines a block as a list of statements. A function declaration is not a statement.

// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}

/*----------------------------------------------*/

// 2. Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope.

// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}

/*----------------------------------------------*/

// 3. Never use arguments, opt to use rest syntax ... instead. eslint: prefer-rest-params

// Why? ... is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like arguments.

// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}

/*----------------------------------------------*/

// 4. Use default parameter syntax rather than mutating function arguments.

// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}

/*----------------------------------------------*/

// 5 Avoid confusing arrow function syntax (=>) with comparison operators (<=, >=). eslint: no-confusing-arrow

// bad
const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

/*----------------------------------------------*/

// 6. Never reassign parameters. eslint: no-param-reassign

// Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the arguments object. It can also cause optimization issues, especially in V8.

// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}

/*-------------------------------------------------------*/

// 7. Never mutate parameters. eslint: no-param-reassign

// Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

/*----------------------------------------------*/

// 8. Never use the Function constructor to create a new function. eslint: no-new-func

// Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.

// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');

/*------------------- Functions ---------------------*/

// 1. Function arguments (2 or fewer ideally)

function createMenu(title, body, buttonText, cancellable) {
  // ...
}

// ->

function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

/*----------------------------------------------*/

// 2. Functions should do one thing

function emailClients(clients) {
  clients.forEach((client) => {
      const clientRecord = database.lookup(client);
      if (clientRecord.isActive()) {
          email(client);
      }
  });
}

// ->

function emailActiveClients(clients) {
  clients
      .filter(isActiveClient)
      .forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

/*----------------------------------------------*/

// 3. Function names should say what they do

function addToDate(date, month) {
  // ...
}

const date = new Date();

// It's hard to tell from the function name what is added
addToDate(date, 1);

// ->

function addMonthToDate(month, date) {
  // ...
}

const date = new Date();
addMonthToDate(1, date);

/*----------------------------------------------*/

// 4. Set default objects with Object.assign

const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);

// ->

const menuConfig = {
  title: 'Order',
  // User did not include 'body' key
  buttonText: 'Send',
  cancellable: true
};

function createMenu(config) {
  config = Object.assign({
      title: 'Foo',
      body: 'Bar',
      buttonText: 'Baz',
      cancellable: true
  }, config);

  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);

/*----------------------------------------------*/

// 5. Don't use flags as function parameters

/* 
  Flags tell your user that this function does more than one thing. 
  Functions should do one thing. Split out your functions if they are following different code paths based on a boolean.
*/

function createFile(name, temp) {
  if (temp) {
      fs.create(`./temp/${name}`);
  } else {
      fs.create(name);
  }
}

// ->

function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}

/*----------------------------------------------*/

// 6. Avoid Side Effects

// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
let name = 'Ryan McDermott';

function splitIntoFirstAndLastName() {
  name = name.split(' ');
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];

// ->

function splitIntoFirstAndLastName(name) {
  return name.split(' ');
}

const name = 'Ryan McDermott';
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];

/*----------------------------------------------*/

// 7. Avoid Side Effects v.2

const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// ->

const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};

/*----------------------------------------------*/

// 8. Don't write to global functions

Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};

// ->

class SuperArray extends Array {
  diff(comparisonArray) {
      const hash = new Set(comparisonArray);
      return this.filter(elem => !hash.has(elem));
  }
}

/*----------------------------------------------*/

// 9. Don't write to global functions

if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}

// ->

function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}

/*----------------------------------------------*/

// 10. Avoid negative conditionals

function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}

// ->

function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}

/*----------------------------------------------*/

// 10. Avoid conditionals

/*
  This seems like an impossible task. Upon first hearing this, most people say, 
  "how am I supposed to do anything without an if statement?" The answer is that 
  you can use polymorphism to achieve the same task in many cases. The second question 
  is usually, "well that's great but why would I want to do that?" The answer is 
  a previous clean code concept we learned: a function should only do one thing.
  When you have classes and functions that have if statements, you are telling your user that your 
  function does more than one thing. Remember, just do one thing.
*/

class Airplane {
  // ...
  getCruisingAltitude() {
      switch (this.type) {
          case '777':
              return this.getMaxAltitude() - this.getPassengerCount();
          case 'Air Force One':
              return this.getMaxAltitude();
          case 'Cessna':
              return this.getMaxAltitude() - this.getFuelExpenditure();
      }
  }
}

// ->

class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
      return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
      return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
      return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}

/*----------------------------------------------*/

// 11. Don't over-optimize

// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}

// ->

for (let i = 0; i < list.length; i++) {
  // ...
}