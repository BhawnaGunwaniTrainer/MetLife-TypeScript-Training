
function wrapToArray<T>(value: T) {
    return [value];
}

let numbers = wrapToArray<number>(1);
console.log(numbers);

let names = wrapToArray<string>('a');
console.log(names);

/* ************************************** */

class ArrayUtils {
    wrapToArray<T>(value: T) {
        return [value];
    }
}

let utils = new ArrayUtils();
let nums = utils.wrapToArray<number>(1);
console.log(nums);