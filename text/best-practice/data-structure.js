/*------------------- Objects and Data Structures ---------------------*/

// 1. Use getters and setters

/*
Using getters and setters to access data on objects could be better than simply looking for a property on an object.
"Why?" you might ask. Well, here's an unorganized list of reasons why:

    When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
    Makes adding validation simple when doing a set.
    Encapsulates the internal representation.
    Easy to add logging and error handling when getting and setting.
    You can lazy load your object's properties, let's say getting it from a server.
*/

function makeBankAccount() {
    // ...

    return {
        balance: 0,
        // ...
    };
}

const account = makeBankAccount();
account.balance = 100;

// ->

function makeBankAccount() {
    // this one is private
    let balance = 0;

    // a "getter", made public via the returned object below
    function getBalance() {
        return balance;
    }

    // a "setter", made public via the returned object below
    function setBalance(amount) {
        // ... validate before updating the balance
        balance = amount;
    }

    return {
        // ...
        getBalance,
        setBalance,
    };
}

const account = makeBankAccount();
account.setBalance(100);

/*----------------------------------------------*/

// 2. Use method chaining

class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    setMake(make) {
        this.make = make;
    }

    setModel(model) {
        this.model = model;
    }

    setColor(color) {
        this.color = color;
    }

    save() {
        console.log(this.make, this.model, this.color);
    }
}

const car = new Car('Ford', 'F-150', 'red');
car.setColor('pink');
car.save();

// ->

class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    setMake(make) {
        this.make = make;
        // NOTE: Returning this for chaining
        return this;
    }

    setModel(model) {
        this.model = model;
        // NOTE: Returning this for chaining
        return this;
    }

    setColor(color) {
        this.color = color;
        // NOTE: Returning this for chaining
        return this;
    }

    save() {
        console.log(this.make, this.model, this.color);
        // NOTE: Returning this for chaining
        return this;
    }
}

const car = new Car('Ford', 'F-150', 'red')
    .setColor('pink')
    .save();


/*----------------------------------------------*/

// 2. Prefer composition over inheritance

/*
As stated famously in Design Patterns by the Gang of Four, you should prefer composition over inheritance where you can.
There are lots of good reasons to use inheritance and lots of good reasons to use composition.The main point for this maxim 
is that if your mind instinctively goes for inheritance, try to think if composition could model your problem better.
In some cases it can.

You might be wondering then, "when should I use inheritance?" It depends on your problem at hand, 
but this is a decent list of when inheritance makes more sense than composition:

Your inheritance represents an "is-a" relationship and not a "has-a" relationship(Human -> Animal vs.User -> UserDetails).
You can reuse code from the base classes(Humans can move like all animals).
You want to make global changes to derived classes by changing a base class.(Change the caloric expenditure of all animals when they move).
*/

class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // ...
}

// Bad because Employees "have" tax data. EmployeeTaxData is not a type of Employee
class EmployeeTaxData extends Employee {
    constructor(ssn, salary) {
        super();
        this.ssn = ssn;
        this.salary = salary;
    }

    // ...
}

// ->

class EmployeeTaxData {
    constructor(ssn, salary) {
        this.ssn = ssn;
        this.salary = salary;
    }

    // ...
}

class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    setTaxData(ssn, salary) {
        this.taxData = new EmployeeTaxData(ssn, salary);
    }
    // ...
}


/*--------------------------------------------------*/

// A fast half sum:

const hight = 555555555;
const low = 222222222;
const big = Math.floor((hight + low) / 2);
const mid = Math.floor(low + ((hight - low) / 2)); // it`s better