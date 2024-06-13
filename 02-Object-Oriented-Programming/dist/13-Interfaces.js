"use strict";
function getFullName(person) {
    if (person.middleName)
        return `${person.personNo} ${person.firstName} ${person.middleName} ${person.lastName}`;
    return `${person.personNo} ${person.firstName} ${person.lastName}`;
}
let p1 = {
    personNo: "P101",
    firstName: "Bhawna",
    lastName: "Gunwani"
};
p1.lastName = "Something";
let p2 = {
    personNo: "P102",
    firstName: "Bhawna",
    middleName: "Hitesh",
    lastName: "Gunwani"
};
console.log(getFullName(p1));
console.log(getFullName(p2));
let format;
format = function (name, isUpper) {
    return isUpper ? name.toLocaleUpperCase() : name.toLocaleLowerCase();
};
console.log(format('BHAWNA', false));
class Saving {
    deposit() {
        console.log("Deposit");
    }
    withdraw() {
        console.log("Withdraw");
    }
    balance() {
        console.log("Balance");
    }
}
let saving = new Saving();
saving.deposit();
saving.withdraw();
saving.balance();
