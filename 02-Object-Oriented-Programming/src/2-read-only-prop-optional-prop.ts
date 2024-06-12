
// class Account {
//     // Properties
//     // readonly property
//     readonly id: number;
//     owner: string;
//     balance: number;
//     // Optional Property
//     type?: string;
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
//         if(this.type)
//             console.log(`Account Type - ${this.type}`);
//     }
//     deposit(amount: number): void {
//         // this.id = 202;   // id is readonly. You can't change it.
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

// let account1: Account = new Account(101, "King Kochhar", 12000);
// account1.type = "Silver";
// account1.deposit(1000);
// // account1.id = 501;   // id is readonly. You can't change it.
// account1.display();

// let account2: Account = new Account(101, "King Kochhar", 12000);
// account2.deposit(1000);
// // account1.id = 501;   // id is readonly. You can't change it.
// account2.display();
