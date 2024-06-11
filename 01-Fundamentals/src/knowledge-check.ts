
// // For each of these values, what type will the TypeScript compiler infer?
// let a = 100;                    // number
// let b = 'Coffee';               // string
// let c = [true, false, false];   // boolean[]
// let d = {age: number};          // { age: 20 }
// let e = [3];                    // number[]                   
// let f;                          // any
// let g = [];                     // any[]



// // What are the compilation errors in each of the following code snippets?
// let song: {
// title: string,
// releaseYear: number 
// } = { title: 'My song' };
// let prices = [100, 200, 300];
// prices[0] = '$100';
// function myFunc(a: number, b: number): number { }

// // Errors:
// // Property ReleaseYear is not given when initializing the object.
// // We have declared a number[] array but, we are trying to store a string in this array
// // myFunc is expected to return a number but nothing is returned.

// // Given the data below, define a type alias for representing users.
// let users = [
// {
// name: 'John Smith',
// age: 30,
// occupation: 'Software engineer'
// },
// {
// name: 'Kate Müller',
// age: 28
// }
// ];

// // Solution:

// type User = Array<{name : string , age: number , occupation? : string}>

// // Birds fly. Fish swim. 
// // A Pet can be a Bird or Fish. 
// // Use type aliases to represent these.

// type birds = {
//     fly: () => void;
//  }

// type fish = {
//     swim: () => void;
// }

// type Pet = birds | fish;

// // Define a type for representing the days of week. 
// // Valid values are “Monday”, “Tuesday”,etc.

// type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' |
//     'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

// // Simplify the following code snippets:
// let x = foo !== null && foo !== undefined ? foo : bar();
// let value: unknown = 'a';
// console.log(value.toUpperCase());


// // Solution:
// let value: unknown = 'a';
//     if(typeof value == 'string')
//         console.log(value.toUpperCase());
// let x = foo ?? Bar();

// // What is the problem in this piece of code?
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);

// // Solution:
// console.log(user?.address?.street);