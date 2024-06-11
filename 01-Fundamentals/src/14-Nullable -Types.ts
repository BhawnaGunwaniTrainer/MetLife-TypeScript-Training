
// The Nullable Type:

function greet(name: string | null | undefined) {
    if(name) {
        console.log(name.toUpperCase())
    } else {
        console.log('Holla..!!');
    }
}

greet('Bhawna Gunwani');
greet(null);
greet(undefined);