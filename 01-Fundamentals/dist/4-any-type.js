"use strict";
let level;
level = 1;
level = 'a';
let value = 100;
function render(document) {
    console.log(document);
}
let user = `{ name: 'King Kochhar', age: 34}`;
const obj = JSON.parse(user);
console.log(obj);
console.log(obj.name);
