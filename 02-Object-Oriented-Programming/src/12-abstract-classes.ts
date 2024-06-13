
/**
 * Abstract Classes:
 *  - Here, we talk about overriding.
 *  - used to define some common behavious for derived(child) classes to extend.
 *  - Abstract classes cannot be instantiated.
 *  - Ab abstract class has at leat one abstract method.
 *  - To use an abstract class, you need to inherit it and provide the implementation for the abstract class. 
 */

// Abstract Class
abstract class Employee {
    constructor(public firstName: string, private lastName: string) { }
    abstract getSalary(): number;
    get fullName(): string { return `${this.firstName} ${this.lastName}`; }
 }

// Concreate Class
class FullTimeEmployee extends Employee {
    constructor(public firstName: string, private lName: string, private salary: number) {
        super(firstName, lName);
    }
    override getSalary(): number {
        return this.salary;
    }
}

// Concreate Class
class PartTimeEmployee extends Employee {
    constructor(private fName: string, private lName: string, private perHourRate: number, private hours: number) {
        super(fName, lName);
    }
    override getSalary(): number {
        return this.perHourRate * this.hours;
    }
}

// Error: Cannot create an instance of an abstract class.
// let employee = new Employee('Bhawna', 'Gunwani');

let king = new FullTimeEmployee('King', 'Kochhar', 12000);
console.log(king.fullName + ' earns ' + king.getSalary())

let john = new PartTimeEmployee('John', 'SMith', 1000, 20);
console.log(john.fullName + ' earns ' + john.getSalary());

/** ********************************************************************** */

// abstract class Bank {
//     abstract openAcc(): void;
//     abstract closeAcc(): void;
// }

// abstract class Acc extends Bank {
//     abstract deposit(): void;
//     abstract withdraw(): void;
//     abstract balance(): void;
// }
// class SavingAccount extends Acc {
//     override deposit(): void {
//         console.log('Deposit in Saving Account.')
//     }
//     override withdraw(): void {
//         console.log('Withdraw from Saving Account.')
//     }
//     override balance(): void {
//         console.log('Balance in Saving Account')
//     }
//     override openAcc(): void {
//         console.log("Opening Saving Account");
//     }
//     override closeAcc(): void {
//         console.log("Closing Saving Account.");
//     }
// }

// class CurrentAccount extends Acc {
//     override deposit(): void {
//         console.log('Deposit in Current Account.')
//     }
//     override withdraw(): void {
//         console.log('Withdraw from Current Account.')
//     }
//     override balance(): void {
//         console.log('Balance in Current Account')
//     }
//     override openAcc(): void {
//         console.log("Opening Current Account");
//     }
//     override closeAcc(): void {
//         console.log("Closing Current Account.");
//     }
    
// }

// let accountType: string = 'Current';
// switch (accountType) {
//     case 'Saving':
//         let saving: SavingAccount = new SavingAccount();
//         saving.openAcc();
//         saving.deposit();
//         saving.withdraw();
//         saving.balance();
//         saving.closeAcc();
//         break;

//     default:
//         let current: CurrentAccount = new CurrentAccount();
//         current.openAcc();
//         current.deposit();
//         current.withdraw();
//         current.balance();
//         current.closeAcc();
//         break;
// }





























