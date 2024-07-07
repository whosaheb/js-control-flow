const obj1 = {
    name: "Saheb",
    age: 28,
    education: {
        school: "Baita",
        college: "Medinipur"
    }
};

const obj2 = obj1;

Object.freeze(obj1);

obj1.education.school = 26;

console.log(obj1);