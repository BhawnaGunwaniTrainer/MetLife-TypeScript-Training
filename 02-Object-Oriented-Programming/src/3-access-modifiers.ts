
// class Account {

//     readonly id: number;
//     private _owner: string;
//     balance: number;
//     public type?: string;
//     constructor(id: number, owner: string, balance: number) {
//         this.id = id;
//         this._owner = owner;
//         this.balance = balance;
//     }
//     private display(): void {
//         console.log(`Account Number - ${this.id}`);
//         console.log(`Account Holder Name - ${this._owner}`);
//         console.log(`Account Balance - ${this.balance}`);
//         if(this.type)
//             console.log(`Account Type - ${this.type}`);
//     }
//     deposit(amount: number): void {
//         if(amount <= 0)
//             throw new Error('Invalid Error');
//         this.balance += amount;
//         this.display();
//     }
//     public withdraw(amount: number): void {
//         if(amount <= 0)
//             throw new Error('Invalid Error');
//         if(amount > this.balance) {
//             throw new Error("Insufficiant Balance");
//         }
//         this.balance -= amount;
//         this.display()
//     }
// }

// let account1: Account = new Account(101, "King Kochhar", 12000);
// account1.type = "Silver";
// // account1.owner = "Bhawna Gunwani";  // Property 'owner' is private and only accessible within class 'Account'.
// account1.deposit(1000);
// // account1.display();     // Property 'display' is private and only accessible within class 'Account'.

// /* public is a default access modifier. */