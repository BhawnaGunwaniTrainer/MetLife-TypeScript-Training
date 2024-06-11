
const defaultValue = 'default';
const nullableValue: string | null | undefined = null;

const result = nullableValue ?? defaultValue;

console.log(result);

/* ********************** */

let speed: number | null = null;
let ride = {
    // False (undefine, null, '', false, 0)
    // speed: speed ! == null ? speed : 30,
    // speed: speed || 30
    speed: speed ?? 30
}