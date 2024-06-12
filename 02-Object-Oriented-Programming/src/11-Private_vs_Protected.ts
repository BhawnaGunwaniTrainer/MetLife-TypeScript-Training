class Person {
    constructor(
        public firstName: string, 
        public lastName: string) { }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    private welcomeMessage(): void {
        console.log('Welcome to Person Class');
    }

    display() {
        console.log('First Name : ' + this.firstName);
        console.log('Last Name : ' + this.lastName);
    }
}

class Student extends Person {
    constructor(public fName: string, 
        public lName: string,
        public studentId: number) { 
            super(fName, lName);
    }

    override display(): void {
        super.display();
        console.log("Student Id : " + this.studentId);
    }
    
}

class Teacher extends Person {
    override get fullName() {
        super.welcomeMessage();
        return 'Professor' + ' ' + super.fullName;
    }
}

class Principal extends Person {
    override get fullName() {
        return 'Principal' + ' ' + super.fullName;
    }
}

let t1: Teacher = new Teacher("A", "B");
console.log(t1.fullName);


