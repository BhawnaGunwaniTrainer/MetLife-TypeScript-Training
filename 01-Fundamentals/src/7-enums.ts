
// A enum is a group of named constant values.

// const small = 1;
// const medium = 2;
// const large = 3;

// Enums should be created in PascalCase
enum Size1 { Small, Medium, Large};
enum Size2 { Small = 1, Medium, Large};
enum Size3 { Small = 's', Medium = 'm', Large = 'l'};

console.log(Size1.Medium);
console.log(Size2.Medium);
console.log(Size3.Medium);

function calculatePrice(size: Size1) {
    let price: number;
    switch(size) {
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
