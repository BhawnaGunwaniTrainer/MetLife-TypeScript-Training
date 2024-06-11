"use strict";
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Holla..!!');
    }
}
greet('Bhawna Gunwani');
greet(null);
greet(undefined);
