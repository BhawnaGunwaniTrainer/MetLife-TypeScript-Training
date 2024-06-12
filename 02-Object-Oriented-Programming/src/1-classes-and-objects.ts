
// class Account {
//     // Properties
//     id: number;
//     owner: string;
//     balance: number;
//     // Special Method (Constructor)
//     constructor() {
//         this.id = 101;
//         this.owner = "King Kochhar";
//         this.balance = 10000;
//     }
//     // Methods
//     display(): void {
//         console.log(`Account Number - ${this.id}`);
//         console.log(`Account Holder Name - ${this.owner}`);
//         console.log(`Account Balance - ${this.balance}`);
//     }
// }

// // Creating an object of a class
// // A representator of a class
// let account1: Account = new Account();
// account1.display();

// let account2: Account = new Account();
// account2.display();

/* ************************************** */

// class Account {
//     // Properties
//     id: number;
//     owner: string;
//     balance: number;
//     // Special Method (Constructor)
//     constructor(id: number, owner: string, balance: number) {
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }
//     // Methods
//     display(): void {
//         console.log(`Account Number - ${this.id}`);
//         console.log(`Account Holder Name - ${this.owner}`);
//         console.log(`Account Balance - ${this.balance}`);
//     }
//     deposit(amount: number): void {
//         if(amount <= 0)
//             throw new Error('Invalid Error');
//         this.balance += amount;
//     }
//     withdraw(amount: number): void {
//         if(amount <= 0)
//             throw new Error('Invalid Error');
//         if(amount > this.balance) {
//             throw new Error("Insufficiant Balance");
//         }
//         this.balance -= amount;
//     }
// }

// // Creating an object of a class
// // A representator of a class
// let account1: Account = new Account(101, "King Kochhar", 12000);
// account1.display();
// account1.deposit(5000);
// account1.withdraw(6000);
// account1.display();

// console.log(" *********************************** ")

// let account2: Account = new Account(102, "Gautam Bhalla", 15000);
// account2.display();
// // account2.deposit(1000);      -- Throws Invalid Error
// // account2.withdraw(20000);    -- Throws Insufficient Balance
// account2.display();

// console.log(" *********************************** ")

// let account3: Account = new Account(103, "Sarah Bowling", 21000);
// // account3.display();
// console.log(account3);
// console.log(account3 instanceof Account);
// console.log(typeof account3);

// // union
// // if(typeof account3 === 'Account') { }


