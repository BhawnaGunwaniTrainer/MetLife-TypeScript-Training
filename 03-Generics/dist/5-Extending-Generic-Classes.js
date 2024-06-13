"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    print() {
        console.log(this._objects);
    }
}
let p1 = { name: 'A', price: 12 };
let u1 = { name: 'B', age: 23 };
let store = new Store();
store.add(p1);
store.print();
let user = new Store();
user.add(u1);
user.print();
