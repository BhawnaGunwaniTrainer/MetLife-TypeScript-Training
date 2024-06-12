
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

//     override display(): void {
//         super.display();
//         console.log("Student Id : " + this.studentId);
//     }
    
// }

// class Teacher extends Person {

//     override get fullName() {
//         return 'Professor' + ' ' + super.fullName;
//     }

// }

// // let s1: Student = new Student('Bhawna', 'Gunwani', 101);
// // console.log(s1.fullName);
// // s1.display();


// let t1: Teacher = new Teacher('Rohit', 'Sharma');
// console.log(t1.fullName);

/* ******************************************************************* */


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

//     override display(): void {
//         super.display();
//         console.log("Student Id : " + this.studentId);
//     }
    
// }

// class Teacher extends Person {
//     override get fullName() {
//         return 'Professor' + ' ' + super.fullName;
//     }
// }

// class Principal extends Person {
//     override get fullName() {
//         return 'Principal' + ' ' + super.fullName;
//     }
// }



// function printNames(people: Person[]) {
//     for(let person of people) {
//         console.log(person.fullName);
//     }
// }

// printNames([
//     new Student("Yash", "Gupta", 101),  // Yash Gupta
//     new Teacher("Sakshi", "Dhameja"),   // Professor Sakshi Dhameja
//     new Principal("Bhawna", "Gunwani")    // Principal Bhawna Gunwani
// ]);
