"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log(customer.birthday);
let customer1 = getCustomer(2);
console.log(customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday);
