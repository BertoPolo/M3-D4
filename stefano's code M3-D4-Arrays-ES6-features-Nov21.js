const arrOfObjPeople = [
  { name: "Giorgio", age: 18, kudos: 100 },
  { name: "Mirko", age: 16, kudos: 50 },
  { name: "Silvio", age: 12, kudos: 1000 },
  { name: "Alberto", age: 62, kudos: 1 },
];

const filterByKudos = arrOfObjPeople.filter(obj => obj.kudos > 100);
console.log(filterByKudos);

// find - finds the first element that meets the condition and returs it

//   const findOldest = arrOfObjPeople.filter(obj => obj.age > 60)[0] // approach with filter
const findOldest = arrOfObjPeople.find(obj => obj.age > 60);
console.log(findOldest);

// some
const atLeastOne = arrOfObjPeople.some(person => person.age >= 64);
console.log(atLeastOne);

// every
const everyElem = arrOfObjPeople.every(person => person.age > 13);
console.log(everyElem);

// findIndex
const indexOfsmth = arrOfObjPeople.findIndex(person => person.age === 10);
console.log(indexOfsmth);

// includes
const arrOfNames = arrOfObjPeople.map(person => person.name);

console.log(arrOfNames);
const includesStr = arrOfNames.includes("Silvio");
console.log(includesStr);

const arrOfNums = [1, 89, 25, 102, 18, 0, 72, 10000];

// sort
console.log(arrOfNames.sort());
console.log(arrOfNums.sort((a, b) => (a < b ? 1 : -1)));

console.log(arrOfObjPeople.sort((a, b) => (a.kudos < b.kudos ? -1 : 1)));

// reduce

const reducedAgesSum = arrOfObjPeople.reduce((accumulator, currentValue) => {
  console.log("ACCUMUlATOR", accumulator);
  console.log("CURRENTVALUE", currentValue.age);
  return accumulator + currentValue.age;
}, 0); // accumulator = 0, currentValue = { name: "Giorgio", age: 18, kudos: 100 } // accumulator = 18

console.log(reducedAgesSum);

const hello = "hello";
const splitted = hello.split("");
console.log(splitted);

console.log(splitted.reduce((acc, curr) => acc.concat(curr), "!"));

// let total = 0

// for (let i = 0; i < arrOfObjPeople.length; i++) {
//     const age = arrOfObjPeople[i].age

//     total = total + age
// }

const reducedAgesSum2 = arrOfObjPeople.reduce((acc, curr) => acc + curr.age, 0);

const kudosHigherThanSum = arrOfObjPeople
  .map(student => student.kudos)
  .filter(value => value >= 100)
  .reduce((total, currVal) => total + currVal, 0);

kudosHigherThanSum;

// DEFAULT PARAMETERS

const multiply = (n1, n2 = 2) => n1 * n2;

console.log(multiply(2));

// const search = query => {
//   if (!query) {
//     console.log("http://something.com/api/v1/query=nature");
//   } else {
//     console.log("http://something.com/api/v1/query=" + query);
//   }
// };

// search();

const search = (query = "nature") => {
  console.log("http://something.com/api/v1/query=" + query);
};

search("trees");

// REST PARAMETERS

const withRestParams = (param1, param2, ...rest) => {
  console.log(param1);
  console.log(param2);
  console.log(rest);
};

withRestParams("hey", "hi", "hello", "", "", "");

// TERNARY OPERATOR

const studName = "Brad";

// let isAdmitted = false

// if(studName=== "Brad") {
//     isAdmitted = true
// }

const isAdmitted = studName === "Brad" ? true : false;

// DESTRUCTURING

const student = {
  name: "Alberto",
  specialty: "sidekick",
  location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  street: "Washington st.",
};

// const student2 = {
//   name: "John",
//   specialty: "student",
//   location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
// };

// const student3 = {
//   name: "Tom",
//   specialty: "user",
//   planet: "Earth",
// };

// const name = obj.name;
// const specialty = obj.specialty;
// const country = obj.location.area.country;

// const {
//   name,
//   specialty,
//   location: { area: country },
// } = student;
// console.log(name);
// console.log(specialty);
// console.log(country);

const arrOfObj = [
  {
    name: "Alberto",
    specialty: "sidekick",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "John",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Bill",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Bill",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Tom",
    specialty: "teacher",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
];

const [, second, ...rest] = arrOfObj;

const { specialty } = second;
console.log(specialty);
console.log(second);
console.log(rest);

// DESTRUCTURING FUNCTION PARAMETERS
const person = ({
  name,
  specialty,
  location: {
    area: { country },
  },
}) => {
  console.log(name);
  console.log(specialty);
  console.log(country);
};

person(student);

// SPREAD OPERATOR

const student2 = {
  name: "John",
  specialty: "student",
  location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
};

const student3 = {
  name: "Tom",
  specialty: "user",
  planet: "Earth",
};

const student4 = Object.assign({}, student2, student3);

// delete student4.location
console.log(student4);

const student5 = { ...student, surname: "Doe", ...student2, ...student3, name: "stefano" };
console.log(student5);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

console.log([..."hello"]);