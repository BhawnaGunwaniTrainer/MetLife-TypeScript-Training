
// /**
//  * 
//  */

// // Object Literal:
// let employee = {
//     firstName: "King",
//     lastName: "Kochhar",
//     age: 23,
//     sayHello: () => {
//         console.log("Say Hi");
//     },
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
//  };


//  console.log(employee);
//  console.log(employee.firstName);
//  console.log(employee.sayHello());
//  console.log(employee.getFullName());

//  /* ********************** */

// // Explcitly Specifying the properties of an object

//  let department: {
//     deptId: number;
//     deptName: string,
//     deptLocation: { street: string, city: string}
//  } 

//  // Assigning values to an object

//  department = {
//     deptId: 101,
//     deptName: 'Sales',
//     deptLocation: { street: 'Civil Lines', city: 'Delhi' }
//  }

//  // You can combine both, (Initializing)

//  let department1: {
//     deptId: number,
//     deptName: string,
//     deptLocation: string,
//  } = {
//     deptId: 101,
//     deptName: 'Sales',
//     deptLocation: 'Delhi'
//  }

//  /* ********************** */

// // object vs. Object

//  let department2: { } = { };
//  console.log(department2.toString());
//  console.log(department1.valueOf())

//  /* ********************** */

//  // Array of Objects

//  let personList: {
//     name: string,
//     age: number,
//     city: string
//  }[] = [
//     { name: 'King', age: 23, city: 'Delhi' },
//     { name: 'Kochhar', age: 22, city: 'Mumbai' },
//     { name: 'Gautam', age: 43, city: 'Delhi' }
//  ];

//  console.log(personList);

//  personList.forEach((person) => {
//     console.log(`${person.name}, ${person.age}, ${person.city}`);
//  })

//   /* ********************** */

// // Array of Objects

//   let users: Array<{name: string, age: number, city: string}> = [
//     { name: 'A', age: 23, city: 'Delhi' },
//     { name: 'B', age: 22, city: 'Mumbai' },
//     { name: 'C', age: 43, city: 'Delhi' }
//   ]

//   console.log(users);
//   users.forEach((user) => {
//     console.log(user);
//   })