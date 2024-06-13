interface Product1 {
    name: string;
    price: number;
}

interface User1 {
    name: string;
    age: number;
}

class Store<T> {
    private _objects: T[] = []
    add(obj: T): void {
        this._objects.push(obj)
    }
    print(): void {
        console.log(this._objects);
    }
}

let p1: Product1 = { name: 'A', price: 12};
let u1: User1 = { name: 'B', age: 23};

let store = new Store<Product1>();
store.add(p1);
store.print();

let user = new Store<User1>();
user.add(u1);
user.print();
