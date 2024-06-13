"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    welcomeMessage() {
        console.log('Welcome to Person Class');
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
        super.welcomeMessage();
        return 'Professor' + ' ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal' + ' ' + super.fullName;
    }
}
let t1 = new Teacher("A", "B");
console.log(t1.fullName);
