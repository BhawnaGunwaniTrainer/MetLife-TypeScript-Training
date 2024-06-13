"use strict";
function wrapToArray(value) {
    return [value];
}
let numbers = wrapToArray(1);
console.log(numbers);
let names = wrapToArray('a');
console.log(names);
class ArrayUtils {
    wrapToArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let nums = utils.wrapToArray(1);
console.log(nums);
