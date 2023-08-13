//defing the types
let age: number = 18;
let nameString: string = "Bipul";
let testBool: boolean = true;
let testStringOrNumber: string | number = 12;

//array
let names: string[] = ["john", "jane", "tom"];
let stringArray: string[] = ["one", "two", "three"];
let numberArray: number[] = [1, 2, 3];
let multipleTypeArray: (String | number)[];

//objects
//defining the type of the object

let user: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: number; // this make phone number not mandatory to fill
};

interface Product {
  name: string;
  price: number;
}

user = {
  username: "bipul",
  age: 18,
  isAdmin: true,
};

user.username = "Changed";
user.phone = 123;

const product: Product = {
  name: "apple",
  price: 120,
};
const showProduct = (product: Product): string => {
  return `The Price of the ${product.name} is ${product.price}`;
};
console.log(showProduct(product));

// any type
// if i donot specefiy the type the default is any
let testAny: any[];
testAny = [1, 2, "Bool", true];

let funcReturnString = (): string => {
  console.log("Nice thing");
  return "Hello world";
};

let multiple = (num: number): number => {
  return num * num;
};

//tuple
let skill: [string, number];
skill = ["Programming", 5];

let color: [number, number, number] = [255, 0, 0];
let optionTuple1, optionTuple2: [number, number, string?];
optionTuple1 = [1, 2];
optionTuple2 = [3, 4, "test"];

//enum
enum Direction {
  up = "MOVE UP",
  down = "MOVE DOWN",
  left = "MOVE LEFT",
  right = "MOVE RIGHT",
}

enum Colors {
  red,
  green,
  blue,
}

let getColor: Colors = Colors.green; //this give 1

let getDirection = (): Direction => {
  return Direction.up;
};

//never
function raiseError(message: string): never {
  throw new Error(message);
}
//indefinite loop is also of never type
//never type represents the return type of a function that always
//throws error.

//type aliases

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let userFunc = (user: UserType): void => {
  console.log(user.age);
};

type myFunc = (a: number) => number;
let display: myFunc = (a = 10) => 10;

type myType = number | string;
let testVat: myType = 12;

//Interfaces

interface UserObjType {
  username: string;
  email: string;
}

interface EmployeeObjType extends UserObjType {
  employeeID: number;
}

const emp1: EmployeeObjType = {
  username: "bipul",
  email: "bipullamsal@gmail.com",
  employeeID: 202,
};
