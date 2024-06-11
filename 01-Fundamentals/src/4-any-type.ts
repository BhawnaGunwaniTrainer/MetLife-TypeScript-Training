// The any type
let level;
level = 1;
level = 'a';

let value = 100;
// value = '100';  // Type 'string' is not assignable to type 'number'

function render(document: any) {
    console.log(document);
}

let user = `{ name: 'King Kochhar', age: 34}`;
const obj = JSON.parse(user);
console.log(obj);
console.log(obj.name);