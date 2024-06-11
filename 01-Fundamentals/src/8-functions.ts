
/*
Functions:
    - DRY (Dont Repeat Yourself)
    - are the building block of readable, maintainable and reusable code.
*/

/* ********************************* */

// Non-Parameterized Function

function sayHello() {
    console.log('Say Hi..');
}

sayHello();
sayHello();

/* ********************************* */

// Parameterized Function

function getFullName(fname: string, lname: string) {
    console.log(`Hello ${fname} ${lname}!!`);
}

getFullName('King', 'Kochhar');
getFullName('John', 'Smith');

/* ********************************* */

// Function that returns a value without return statement

function printFullName(fname: string, lname: string) {
    return `Hello ${fname} ${lname}!!`;
}

let fullName = printFullName('King', 'Kochhar');
console.log(fullName);

console.log(printFullName('John', 'Smith'));

/* ********************************* */

// Function with Return Statement

function calculateTax(income: number): number {
    if(income < 50000)
        return income * 0.2;
    return income * 0.3;
}

console.log(calculateTax(20000));
console.log(calculateTax(90000));

/* ********************************* */

/* Optional Parameters */

function calTax(income: number, taxYear?: number): number {
    if((taxYear || 2022) < 2022)
        return income * 0.2;
    return income * 0.3;
}

console.log(calTax(20000, 2012));
console.log(calTax(90000));

/* ********************************* */

// Default Parameter

function calculate(income: number, taxYear: number = 2022): number {
    if(taxYear < 50000)
        return income * 0.2;
    return income * 0.3;
}

console.log(calculate(20000, 2012));
console.log(calTax(90000));

/* ********************************* */

// Rest Parameter

function addNumbers(...numbers: number[]) {
    let total = 0;
    numbers.forEach((num) => { total+= num })
    return total;
}

console.log(addNumbers(100,200));
console.log(addNumbers(100, 200, 300));
console.log(addNumbers(100, 200, 300, 400));
console.log(addNumbers(100, 200, 300, 400, 500));

/* ********************************* */

// Function Overloading:

/* When a module has more than function with same function but different function signatures. 
This is termed as Function Overloading. */

/* Function Signatures means function parameters.
    Function signatures can differ as
        - Number of parameters
        - Type of parameters
        - Sequence of parameters
*/

// function addition(val1: number, val2: number): number { }
// function addition(val1: string, val2: string): string { }

// Implementation 1:

function addition(val1: number | string, val2: number | string): number | string {
    if(typeof val1 === 'number' && typeof  val2 === 'number')
        return val1 + val2;
    if(typeof val1 === 'string' && typeof  val2 === 'string')
        return val1 + val2;
    if(typeof val1 === 'number' && typeof  val2 === 'string')
        return val1 + val2;
    else
        return 0;
}

console.log(addition(100, 100));
console.log(addition('100', '100'));
console.log(addition(100, '100'));

// Implementation 2:

function add(val1: number, val2: number): number;
function add(val1: string, val2: string): string;
function add(val1: number, val2: string): string;
function add(val1: any, val2: any): any {
    return val1 + val2;
}

console.log(add(10, 20));
console.log(add('10', '20'));
console.log(add(10, '20'));

// Implemention 3:

function add1(val1: number, val2: number): number;
function add1(val1: number, val2: number, val3: number): number;
function add1(val1: number, val2: number, val3?: number): number;
function add1(val1: any, val2: any, val3?: any): any {
    if(val3) return val1 + val2 + val3;
    return val1 + val2;
}







