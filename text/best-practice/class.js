/*
1. Classes have a default constructor if one is not specified. An empty constructor 
function or one that just delegates to a parent class is unnecessary. eslint: no-useless-constructor
*/

// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}

/*----------------------------------------------*/

// 2. Use PascalCase only when naming constructors or classes. eslint: new-cap

// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});

/*----------------------------------------------*/

// 3. Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf.

/*
  Why? These methods may be shadowed by properties on the object in question - consider { hasOwnProperty: false } - 
  or, the object may be a null object (Object.create(null)).
*/

// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
// ...
console.log(has.call(object, key));

-------------------------------------------------------

// 4. Do not use JavaScript getters/setters as they cause unexpected side effects and are harder 
// to test, maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal('hello').

// bad
class Dragon {
  get age() {
    // ...
  }

  set age(value) {
    // ...
  }
}

// good
class Dragon {
  getAge() {
    // ...
  }

  setAge(value) {
    // ...
  }
}