

// class Account {

//     public type?: string;
    
//     constructor(readonly id: number, 
//         private _owner: string, 
//         private _balance: number) {
//     }

//     // Read-Only Property
//     get balance() {
//         return this._balance;
//     }

//     // Write-Only Property
//     set balance(value: number) {
//         if(value <= 0) 
//             throw new Error('Invalid Value');
//         this._balance = value;
//     }

//     display(): void {
//         console.log(`Account Number - ${this.id}`);
//         console.log(`Account Holder Name - ${this._owner}`);
//         console.log(`Account Balance - ${this._balance}`);
//         if(this.type)
//             console.log(`Account Type - ${this.type}`);
//     }

//     deposit(amount: number): void {
//         if(amount <= 0)
//             throw new Error('Invalid Error');
//         this._balance += amount;
//     }

//     public withdraw(amount: number): void {
//         if(amount <= 0)
//             throw new Error('Invalid Error');
//         if(amount > this._balance) {
//             throw new Error("Insufficiant Balance");
//         }
//         this._balance -= amount;
//     }

// }

// let account1: Account = new Account(101, "King Kochhar", 12000);
// account1.type = "Silver";
// account1.balance = 32000;
// console.log(account1.balance);
// account1.deposit(1000);
// account1.display();
