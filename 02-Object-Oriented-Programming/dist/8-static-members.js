"use strict";
class Ride {
    start() { Ride.activeRides++; }
    stop() { Ride.activeRides--; }
}
Ride.activeRides = 0;
let ride1 = new Ride();
ride1.start();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
Ride.activeRides = 0;
console.log(Ride.activeRides);
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        Account.bankName = "Indusind Bank";
    }
    display() {
        console.log(`Account Number - ${this.id}`);
        console.log(`Account Holder Name - ${this.owner}`);
        console.log(`Account Balance - ${this.balance}`);
        console.log(`Bank Name - ${Account.bankName}`);
    }
}
let accounts = [
    new Account(101, "Shreya", 12000),
    new Account(102, "Gautam", 22000),
    new Account(103, "Sumit", 30000)
];
Account.bankName = "Axis Bank";
accounts[0].display();
accounts[1].display();
accounts[2].display();
