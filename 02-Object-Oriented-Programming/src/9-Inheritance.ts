
// class Person {
//     constructor(
//         public firstName: string, 
//         public lastName: string) { }

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     display() {
//         console.log('First Name : ' + this.firstName);
//         console.log('Last Name : ' + this.lastName);
//     }
// }

// class Student extends Person {
//     constructor(public fName: string, 
//         public lName: string,
//         public studentId: number) { 
//             super(fName, lName);
//     }

//     display(): void {
//         super.display();
//         console.log("Student Id : " + this.studentId);
//     }
    
// }

// let s1: Student = new Student('Bhawna', 'Gunwani', 101);
// console.log(s1.fullName);
// s1.display();