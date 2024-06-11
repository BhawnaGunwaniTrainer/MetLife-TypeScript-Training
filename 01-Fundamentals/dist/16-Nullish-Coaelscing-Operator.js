"use strict";
const defaultValue = 'default';
const nullableValue = null;
const result = nullableValue !== null && nullableValue !== void 0 ? nullableValue : defaultValue;
console.log(result);
