"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    display() {
        console.log('First Name : ' + this.firstName);
        console.log('Last Name : ' + this.lastName);
    }
}
class Student extends Person {
    constructor(fName, lName, studentId) {
        super(fName, lName);
        this.fName = fName;
        this.lName = lName;
        this.studentId = studentId;
    }
    display() {
        super.display();
        console.log("Student Id : " + this.studentId);
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor' + ' ' + this.firstName + ' ' + this.lastName;
    }
}
let t1 = new Teacher('Rohit', 'Sharma');
console.log(t1.fullName);
