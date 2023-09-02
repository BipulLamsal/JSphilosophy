function getRandomNumber(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(getRandomNumber(numbers));

// making type generic

//array of type T
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let randomGenreicNum = getRandomElement<number>(numbers);
//can also use TS compilre itself identify the type of array i used.
randomGenreicNum = getRandomElement(numbers);

interface authorObjType {
  id: number;
  username: string;
}

interface categoryObjType {
  id?: number;
  title: string;
}

interface postObjType {
  id: number;
  title: string;
  desc: string;
  extra: categoryObjType[] | authorObjType[];
}
//use ; or , does not matter.
// using generic for the data type extra which might be among the category and authorobj

interface newPostObjType<T> {
  id: number;
  title: string;
  desc: string;
  extra?: T[];
}

const newPost: newPostObjType<categoryObjType> = {
  id: 1,
  title: "New post",
  desc: "this is the descritption",
  extra: [{ id: 1, title: "Random" }],
};

//generic constraints

interface AnimalType {
  name: string;
  age: number;
}

function getOlderAnimal<T extends AnimalType>(animal1: T, animal2: T): T {
  return animal1.age > animal2.age ? animal1 : animal2;
}

getOlderAnimal({ name: "Husky", age: 12 }, { name: "Wishky", age: 8 });

interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonKeys = keyof Person;

function getPersonProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Test cases
const stringArray = ["apple", "banana", "cherry"];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false];
const objectArray = [{ name: "Alice" }, { name: "Bob" }];

const firstString = getFirstElement(stringArray); // Expected: "apple"
const firstNumber = getFirstElement(numberArray); // Expected: 1
const firstBoolean = getFirstElement(booleanArray); // Expected: true
const firstObject = getFirstElement(objectArray); // Expected: { name: "Alice" }

// T[K] is the accessing the object with the key K and T[K] [] is making the array of that type
function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  let newArr: T[K][] = [];
  for (let i: number = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
  }
  return newArr;
}

// Test case
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 28 },
];

const names = pluck(people, "name"); // Expected: ["Alice", "Bob", "Charlie"]
const ages = pluck(people, "age"); // Expected: [30, 25, 28]
