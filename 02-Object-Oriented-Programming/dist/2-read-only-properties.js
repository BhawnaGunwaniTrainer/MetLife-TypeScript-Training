"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    display() {
        console.log(`Account Number - ${this.id}`);
        console.log(`Account Holder Name - ${this.owner}`);
        console.log(`Account Balance - ${this.balance}`);
        if (this.type)
            console.log(`Account Type - ${this.type}`);
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid Error');
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error('Invalid Error');
        if (amount > this.balance) {
            throw new Error("Insufficiant Balance");
        }
        this.balance -= amount;
    }
}
let account1 = new Account(101, "King Kochhar", 12000);
account1.type = "Silver";
account1.deposit(1000);
account1.display();
let account2 = new Account(101, "King Kochhar", 12000);
account2.deposit(1000);
account2.display();
