let numbers = [1, 2, 3];
let numbers1 = [1, ,2, '3'];
// let numbers2: number[] = [1, ,2, '3']; // Type 'string' is not assignable to type 'number
// let numbers3: (string | number)[] = [1, ,2, '3'];
let numbers4 = [];
numbers4[0]= 10;
numbers4[1]= '10';
numbers4[2]= true;

let numbers5: number[] = [];
numbers5[0]= 10;
// numbers5[1]= '10';  // Type 'string' is not assignable to type 'number'.
// numbers5[2]= true;  // Type 'string' is not assignable to type 'number'.

let courses: string[] = [];
courses = ['JavaScript', 'TypeScript', 'Node'];
console.log(courses)
courses.push('Angular');
console.log(typeof(courses[0]));
console.log(courses);
console.log(courses.length);

let nums = [1,2,3,4,5];
let double_nums=nums.map(n => n*2);
console.log(double_nums);

// Two Dimensional Arrays:
const vals: number[][] = new Array(8)
.fill(10)
.map(() => new Array(2).fill(20));
console.log(vals);

