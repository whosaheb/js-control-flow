const obj1 = {
    name: "Saheb",
    age: 28,
    education: {
        school: "Baita",
        college: "Medinipur"
    }
};

/******************* Below is freeze method for object immutable */

// const obj2 = obj1;
const obj2 = { ...obj1 }; // {...obj1, education: obj1.education }; // this will allow us to initialize value by reference

Object.freeze(obj1);
Object.freeze(obj1.education); // need for object in object reference

obj2.age = 26;
// obj2.education.school = 26;

// console.log(obj2);

/*********** Create Target Object *****************/
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target
Object.assign(person1, person2);
// console.log(person1);

/********************* Object.entries() returns an array of the key/value pairs in an object: **************/
const fruitsObj = { Bananas: 300, Oranges: 200, Apples: 500 };

let fruitsArrResult = "";
for (let [fruit, value] of Object.entries(fruitsObj)) {
    fruitsArrResult += fruit + ": " + value + "\n";
}
// console.log(Object.entries(fruitsObj));
// console.log(fruitsArrResult)

/****** The fromEntries() method creates an object from a list of key/value pairs. / Does revers the value get by Object.entries(fruits) */
const fruitsArr = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const fruitsObjResult = Object.fromEntries(fruitsArr);
// console.log(fruitsObjResult);

/*************** Object.values() is similar to Object.entries(), but returns a single dimension array of the object values: *****/
const personObj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let personObjValResult = Object.values(personObj);
// console.log(personObjValResult);

/*************** The Object.keys() method returns an array with the keys of an object. *****/
const personObjKeyResult = Object.keys(personObj);
// console.log(personObjKeyResult);

/*************  The Object.groupBy() method does not change the original object. *********/
/*************  groupBy is not a function in Node.js. In nodejs we have to use reduce method on Array *********/
// Create an Array
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

// Callback function to Group Elements
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
// const result = Object.groupBy(fruits, myCallback);
// console.log(result);


