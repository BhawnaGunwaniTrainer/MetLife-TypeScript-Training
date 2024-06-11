
// Type aliases allow you to create a new name for an exsisting type.

/* ************************* */

type chars = string;
let message: chars;

/* ************************* */

type alphanumberic = string | number;
let msg : alphanumberic;
msg = 123;
msg = "123";
// msg = true; // Compile Type Error

/* ************************* */

type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'King',
    retire: (date: Date) => {
        console.log(date)
    }
}

