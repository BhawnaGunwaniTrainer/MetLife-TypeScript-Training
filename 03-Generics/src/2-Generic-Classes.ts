
// Generic Class
// Here, T is a generic variable
// class KeyValuePair<T> {
//     constructor(public key: T, public value: string) { }
// }

// let pair1 = new KeyValuePair<number>(1, 'Something');
// let pair2 = new KeyValuePair<string>('1', "Something");

/* **************************************************** */

// Generic Class
// Here, T is a generic variable
class KeyValuePair<T, U> {
    constructor(public key: T, public value: U) { }
}

let pair1 = new KeyValuePair<number, number>(1, 101);
let pair2 = new KeyValuePair<string, string>('1', "Something");