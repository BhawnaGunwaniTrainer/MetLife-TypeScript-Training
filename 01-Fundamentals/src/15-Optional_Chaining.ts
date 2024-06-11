type Customer = {
    birthday: Date
};

function getCustomer(id: number) : Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);
if(customer != null && customer != undefined) 
    console.log(customer.birthday);

// Optional Property access operator can be used.
let customer1 = getCustomer(2);
console.log(customer1?.birthday);