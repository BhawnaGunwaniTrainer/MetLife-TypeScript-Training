"use strict";
let numbers = [1, 2, 3];
let numbers1 = [1, , 2, '3'];
let numbers4 = [];
numbers4[0] = 10;
numbers4[1] = '10';
numbers4[2] = true;
let numbers5 = [];
numbers5[0] = 10;
let courses = [];
courses = ['JavaScript', 'TypeScript', 'Node'];
console.log(courses);
courses.push('Angular');
console.log(typeof (courses[0]));
console.log(courses);
console.log(courses.length);
let nums = [1, 2, 3, 4, 5];
let double_nums = nums.map(n => n * 2);
console.log(double_nums);
const vals = new Array(8)
    .fill(10)
    .map(() => new Array(2).fill(20));
console.log(vals);
