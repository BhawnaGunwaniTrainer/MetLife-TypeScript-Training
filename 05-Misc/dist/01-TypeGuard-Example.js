"use strict";
/**
 * Type Guard:
 *  - used to narrow down the type of a variable withing a certain block of code.
 */
// type alphanumeric = string | number;
// function addition(a: alphanumeric, b: alphanumeric) {
//     if(typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }
//     if(typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b);
//     }
//     throw new Error('Invalid Arguments.');
// }
// console.log(addition(10,20));
// console.log(addition('10','20'));
// console.log(addition(10,'20'));
/* ************************************************ */
// class Customer {
//     isCreditAllowed(): boolean {
//         //.....
//         return true;
//     }
// }
// class Supplier {
//     isInShortList(): boolean {
//         //.....
//         return true;
//     }
// }
// type BusinessPartner = Customer | Supplier;
// function checkContract(partner: BusinessPartner): string {
//     let msg1: string;
//     if(partner instanceof Customer) {
//         msg1 = partner.isCreditAllowed() ? "Sign the Contract": "Contract Rejected.";
//     }
//     if(partner instanceof Supplier) {
//         msg1 = partner.isInShortList() ? "Sign the Contract": "Contract Rejected.";
//     }
//     return msg1;
// }
// checkContract(new Customer());
// checkContract(new Supplier());
/* ************************************************ */
// class Customer {
//     isCreditAllowed(): boolean {
//         //.....
//         return true;
//     }
// }
// class Supplier {
//     isInShortList(): boolean {
//         //.....
//         return true;
//     }
// }
// type BusinessPartner = Customer | Supplier;
// function checkContract(partner: BusinessPartner){
//     if('isCreditAllowed' in partner) {
//         let msg1 = partner.isCreditAllowed() ? "Sign the Contract": "Contract Rejected.";
//         console.log(msg1);
//     }
//     if('isInShortList' in partner) {
//         let msg1 = partner.isInShortList() ? "Sign the Contract": "Contract Rejected.";
//         console.log(msg1);
//     }
// }
// checkContract(new Customer());
// checkContract(new Supplier());
/* ************************************************ */
class Customer {
    isCreditAllowed() {
        //.....
        return true;
    }
}
class Supplier {
    isInShortList() {
        //.....
        return true;
    }
}
function isCustomer(partner) {
    return partner instanceof Customer;
}
function checkContract(partner) {
    if (isCustomer(partner)) {
        let msg1 = partner.isCreditAllowed() ? "Sign the Contract" : "Contract Rejected.";
        console.log(msg1);
    }
    else {
        let msg1 = partner.isInShortList() ? "Sign the Contract" : "Contract Rejected.";
        console.log(msg1);
    }
}
checkContract(new Customer());
checkContract(new Supplier());
// Product can be a Book or any other type.
function isBook(product) {
    return product.type === 'book';
}
function processProduct(product) {
    if (isBook(product))
        console.log(`Processing Book : ${product.title} and ${product.author}`);
    else
        console.log('Processing Products Here.. ');
}
const book = { type: 'book', title: 'Book One', author: 'Me' };
processProduct(book);
