
/**
 * Allows objects to have dynamic properties.
 */

class SeatAssignment {
    // A1, A2, A3
    // Bhawna, Rohit, Aparna
    // A1?: string;
    // A2?: string;
    // A3?: string;
    [seatNumber: string]: string;


}

let seats = new SeatAssignment();
seats.A1 = "Bhawna";
seats.A2 = "Rohit";
seats.A3 = "Aparna"; 
seats.A4 = "Yash";

/* ***********************************************  */

class StringDictionary {
    [key: string]: string;
}

const myDict: StringDictionary = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
}

console.log(myDict["key1"]);
console.log(myDict["key2"]);
console.log(myDict["key3"]);

myDict["key1"] = "New Value";

console.log("******************************")

console.log(myDict["key1"]);
console.log(myDict["key2"]);
console.log(myDict["key3"]);