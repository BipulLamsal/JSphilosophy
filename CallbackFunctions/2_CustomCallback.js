// virusScanner is a function passed inside function which is called as callback function

function unzip(textname, virusScanner, asyncCallback) {
  const outcome = virusScanner(textname);
  if (outcome) {
    return "FILE ZIPPED";
  } else {
    setTimeout(() => asyncCallback("VIRUS DETECTED, CAN'T UNZIP"), 1000); //wrapped in anonymous function
  }
}

const virusScanner = (value) => {
  //making text value into array -> value.split (",") or,
  //Array.from(value)
  try {
    // foreach method takes callback function  as its argument and calls this function for each element in the array.
    //parameters for foreach are value,index,array

    [...value].forEach((item) => {
      if (item === " ") {
        throw new Error("WhiteSpace Detected");
      }
    });
    return 1;
  } catch (err) {
    setTimeout(() => console.log(err), 2000);
    return 0;
  }
};

function handelVirus(message) {
  console.log(message);
}

console.log(unzip("RANDOM.txt", virusScanner, handelVirus));
unzip("RANDOM NAME.txt", virusScanner, handelVirus);
