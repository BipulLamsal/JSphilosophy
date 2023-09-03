function* simpleGenerator() {
  yield 1;
  // return 10;
  yield 2;
  yield 3;
}

const generator = simpleGenerator();
console.log(generator);
// for (let value of generator) {
//   console.log(value);
// }
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
