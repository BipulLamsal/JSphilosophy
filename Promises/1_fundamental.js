//the main reason why promises is in the game is because of callback hell.
const condition = true;
let promise = new Promise(function (resolve, reject) {
  if (condition === true) {
    resolve("SUCCESS, FULFILLED");
    reject(new Error("NOT FULFILLED")); // it is ignored
  } else {
    reject("FAILED, REJECTED");
  }
});
console.log(promise);
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve({ value: randomNum, status: "OK" });
    } else {
      reject({ value: randomNum, status: "NOT OK" });
    }
  }, 2000);
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally is mostly used for cleaning up");
    boilWater()
      .then(stipTea)
      .then(addSugar)
      .then((result) => console.log(result));
});

//stimulating the process of making tea using promises
const boilWater = () => {
  return new Promise((resolve) => {
    console.log("Water started to boil.");
    setTimeout(() => {
      resolve("HOT WATER");
    }, 1000);
  });
};

const stipTea = (water) => {
  return new Promise((resolve,reject) => {
    console.log(`Tea Bag is stipped in ${water}`);
    setTimeout(() => {
      resolve("BALCK TEA");
    }, 1000);
  });
};

const addSugar = () => {
  return new Promise((resolve) => {
    console.log("Adding sugar");
    setTimeout(() => {
      resolve("TEA READY");
    }, 1000);
  });
};
