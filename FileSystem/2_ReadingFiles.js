const fs = require("fs");
fs.readFile("__tests__/test1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
// sync version
try {
  const data = fs.readFileSync("__tests__/test2.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
// the expression above and below the sync function varies.
console.log("this executes first as the readfile is async function!");

//promise based
const fsp = require("fs/promises");
async function readTextFile() {
  try {
    const data = await fsp.readFile("__tests__/test2.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readTextFile();
