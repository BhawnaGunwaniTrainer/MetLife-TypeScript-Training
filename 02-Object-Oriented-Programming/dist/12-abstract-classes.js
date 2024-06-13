"use strict";
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() { return `${this.firstName} ${this.lastName}`; }
}
class FullTimeEmployee extends Employee {
    constructor(firstName, lName, salary) {
        super(firstName, lName);
        this.firstName = firstName;
        this.lName = lName;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(fName, lName, perHourRate, hours) {
        super(fName, lName);
        this.fName = fName;
        this.lName = lName;
        this.perHourRate = perHourRate;
        this.hours = hours;
    }
    getSalary() {
        return this.perHourRate * this.hours;
    }
}
let king = new FullTimeEmployee('King', 'Kochhar', 12000);
console.log(king.fullName + ' earns ' + king.getSalary());
let john = new PartTimeEmployee('John', 'SMith', 1000, 20);
console.log(john.fullName + ' earns ' + john.getSalary());
