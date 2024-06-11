"use strict";
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 0] = "Small";
    Size1[Size1["Medium"] = 1] = "Medium";
    Size1[Size1["Large"] = 2] = "Large";
})(Size1 || (Size1 = {}));
;
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 1] = "Small";
    Size2[Size2["Medium"] = 2] = "Medium";
    Size2[Size2["Large"] = 3] = "Large";
})(Size2 || (Size2 = {}));
;
var Size3;
(function (Size3) {
    Size3["Small"] = "s";
    Size3["Medium"] = "m";
    Size3["Large"] = "l";
})(Size3 || (Size3 = {}));
;
console.log(Size1.Medium);
console.log(Size2.Medium);
console.log(Size3.Medium);
function calculatePrice(size) {
    let price;
    switch (size) {
        case Size1.Small:
            price = 120;
            break;
        case Size1.Medium:
            price = 150;
            break;
        case Size1.Large:
            price = 180;
            break;
    }
    return price;
}
console.log(calculatePrice(Size1.Medium));
