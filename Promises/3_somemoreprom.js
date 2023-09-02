function engineStartCallback(result) {
  console.log("Engine started successfully", result);
}

function engineFailCallback(err) {
  console.log("Engine failure occured ", err);
}

function engineCheck(engineSettings) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;
      if (success) {
        const result = "NOISE PRODUCED!";
        resolve(result);
      } else {
        const error = "ENGINE MALFUNCTIONED";
        reject(error);
      }
    }, 2000);
  });
}

engineCheck("testing")
  .then((r) => {
    engineStartCallback(r);
  })
  .catch((e) => {
    engineFailCallback(e);
  });

const myPromise = new Promise((resolve, reject) => {
  const check = Math.random() < 0.5;
  setTimeout(() => {
    if (check) {
      resolve("foo");
    } else {
      reject("bar");
    }
  }, 1000);
});

myPromise
  .then(handleFulfilledA, handleRejectedA) // second parameter is optional and can be replaced using catch statement
  .then(handleFulfilledB, handleRejectedB)
  .catch(handleError);

function handleFulfilledA(result) {
  console.log("Fulfilled A:", result);
  return new Promise((resolve, reject) => {
    return resolve(
      new Promise((resolve, reject) => {
        reject("Big Brain Move");
      })
    );
  });
}

function handleRejectedA(error) {
  console.log("Rejected A:", error);
  return "Erroring From A";
}
function handleFulfilledB(result) {
  console.log("Fulfilled B:", result);
  return "Testing From B";
}
function handleRejectedB(error) {
  console.log("Rejected B:", error);
  return "Erroring From B";
}
function handleError(error) {
  console.log("Unhandled error :", error);
}

function resolveUnderThreeSeconds(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (delay <= 3000) {
        res("Resolved");
      } else {
        rej("Rejected");
      }
    }, delay);
  });
}
console.log("when will this statement run?");
resolveUnderThreeSeconds(2000)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
resolveUnderThreeSeconds(4000)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

const returnTest = new Promise ((resolve,reject)=>{
    resolve("1st Message");
})
returnTest
.then((data)=>data + " Changed")
.then((data)=>data + " Renamed")
.then((data)=>data+ " Altered")
.then((data)=>console.log(data));
