"use strict";
var _a, _b;
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let result = fetch('url');
console.log((_a = result.data) === null || _a === void 0 ? void 0 : _a.username);
let result1 = fetch('url');
console.log((_b = result1.data) === null || _b === void 0 ? void 0 : _b.title);
