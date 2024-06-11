"use strict";
function sayHello() {
    console.log('Say Hi..');
}
sayHello();
sayHello();
function getFullName(fname, lname) {
    console.log(`Hello ${fname} ${lname}!!`);
}
getFullName('King', 'Kochhar');
getFullName('John', 'Smith');
function printFullName(fname, lname) {
    return `Hello ${fname} ${lname}!!`;
}
let fullName = printFullName('King', 'Kochhar');
console.log(fullName);
console.log(printFullName('John', 'Smith'));
function calculateTax(income) {
    if (income < 50000)
        return income * 0.2;
    return income * 0.3;
}
console.log(calculateTax(20000));
console.log(calculateTax(90000));
function calTax(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 0.2;
    return income * 0.3;
}
console.log(calTax(20000, 2012));
console.log(calTax(90000));
function calculate(income, taxYear = 2022) {
    if (taxYear < 50000)
        return income * 0.2;
    return income * 0.3;
}
console.log(calculate(20000, 2012));
console.log(calTax(90000));
function addNumbers(...numbers) {
    let total = 0;
    numbers.forEach((num) => { total += num; });
    return total;
}
console.log(addNumbers(100, 200));
console.log(addNumbers(100, 200, 300));
console.log(addNumbers(100, 200, 300, 400));
console.log(addNumbers(100, 200, 300, 400, 500));
function addition(val1, val2) {
    if (typeof val1 === 'number' && typeof val2 === 'number')
        return val1 + val2;
    if (typeof val1 === 'string' && typeof val2 === 'string')
        return val1 + val2;
    if (typeof val1 === 'number' && typeof val2 === 'string')
        return val1 + val2;
    else
        return 0;
}
console.log(addition(100, 100));
console.log(addition('100', '100'));
console.log(addition(100, '100'));
function add(val1, val2) {
    return val1 + val2;
}
console.log(add(10, 20));
console.log(add('10', '20'));
console.log(add(10, '20'));
function add1(val1, val2, val3) {
    if (val3)
        return val1 + val2 + val3;
    return val1 + val2;
}
