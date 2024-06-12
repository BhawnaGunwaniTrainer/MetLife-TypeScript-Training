
// class Ride {
//     activeRides: number = 0;

//     start() { this.activeRides++; }
//     stop() { this.activeRides--; }
// }

// let ride1 = new Ride();
// ride1.start();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(ride1.activeRides);
// console.log(ride2.activeRides);

/* ******************************************* */

class Ride {
    static activeRides: number = 0;

    start() { Ride.activeRides++; }
    stop() { Ride.activeRides--; }
}

let ride1 = new Ride();
ride1.start();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
Ride.activeRides = 0;
console.log(Ride.activeRides);

/* ******************************************* */

class Account {
    // Properties
    id: number;
    owner: string;
    balance: number;
    static bankName: string;
    // Special Method (Constructor)
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        Account.bankName = "Indusind Bank";
    }
    // Methods
    display(): void {
        console.log(`Account Number - ${this.id}`);
        console.log(`Account Holder Name - ${this.owner}`);
        console.log(`Account Balance - ${this.balance}`);
        console.log(`Bank Name - ${Account.bankName}`);
    }
}

let accounts: Account[] = [
    new Account(101, "Shreya", 12000),
    new Account(102, "Gautam", 22000),
    new Account(103, "Sumit", 30000)
];

Account.bankName = "Axis Bank";

accounts[0].display();
accounts[1].display();
accounts[2].display();