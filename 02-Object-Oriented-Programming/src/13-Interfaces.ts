
/**
 * Interface:
 *  - Interface is also a contract within your code.
 *  - They also provide explicit name for type checking.
 */

// function getFullName(person: {
//     firstName: string;
//     lastName: string
// }) {
//     return `${person.firstName} ${person.lastName}`
// }

// let person = {
//     firstName: 'King',
//     lastName: 'Kochhar'
// };

// let customer = {
//     firstName: 'King',
//     age: 32,
//     lastName: 'Kochhar',
   
// };

// console.log(getFullName(person));
// console.log(getFullName(customer));

/* ************************************************** */

interface Person1 {
    readonly personNo: string;
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person1) {
    if(person.middleName)
        return `${person.personNo} ${person.firstName} ${person.middleName} ${person.lastName}`;  
    return `${person.personNo} ${person.firstName} ${person.lastName}`;
}

let p1: Person1 = {
    personNo: "P101",
    firstName: "Bhawna",
    lastName: "Gunwani"
}

// Error: Cannot assign to 'personNo' because it is a read-only 
// p1.personNo = "P201";
p1.lastName = "Something";

let p2: Person1 = {
    personNo: "P102",
    firstName: "Bhawna",
    middleName: "Hitesh",
    lastName: "Gunwani"
}

console.log(getFullName(p1));
console.log(getFullName(p2));

/* ************************************************** */

interface Format {
    (name: string, isUpper: boolean): string
}

let format: Format;
format = function (name: string, isUpper: boolean) {
    return isUpper ? name.toLocaleUpperCase() : name.toLocaleLowerCase();
}

console.log(format('BHAWNA', false));

/* ************************************************** */

interface Bank {
    open(): void;
    close(): void;
}

interface Acc extends Bank {
    deposit(): void
    withdraw(): void
    balance(): void
}

class Saving implements Acc {
    open(): void {
        throw new Error("Method not implemented.");
    }
    close(): void {
        throw new Error("Method not implemented.");
    }
    deposit(): void {
        console.log("Deposit");
    }
    withdraw(): void {
        console.log("Withdraw");
    }
    balance(): void {
        console.log("Balance");
    }

}

let saving: Saving = new Saving();
saving.deposit();
saving.withdraw();
saving.balance();

/* By Default all the methods are abstract in interface. */




