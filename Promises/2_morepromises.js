//more promises because why not
let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => {
    console.log("I am running!");
    resolve(2);
  }, 1000);
});

promise.then((value) => console.log(value));

//delaying a promise
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Resolved"), ms);
  });
}
delay(3000).then(() => console.log("runs after 3 seconds"));
