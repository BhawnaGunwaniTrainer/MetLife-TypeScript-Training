let person: [number, string] = [101, "John Smith"]; 
console.log(person);
let person1: [number, string, boolean, number] = [101, "John Smith", true, 1200]; 
console.log(person1);
let person2: [number, string];
person2 = [102, 'King Kochhar'];
let person3: [number, string, string?];
person3 = [102, 'Sarah Bowling', 'TypeScript'];
console.log(person3);

// Array of Tuples:
let persons: [number, string][];
persons = [
    [101, 'King Kochhar'],
    [102, 'Sarah Bowling'],
    [103, 'John Smith']
];
console.log("***********")
console.log(persons[0]);
persons.push([104, "Karan Johar"]);


