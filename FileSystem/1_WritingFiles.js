const fs = require("fs");
const fsp = require("fs/promises");
let content = "Some random text.";
//async version
fs.writeFile("__tests__/test1.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written succesfully."); // this executes second
  }
});
// sync version
try {
  fs.writeFileSync("__tests__/test2.txt", content);
  console.log("File written succesfully."); // this executes first
} catch (err) {
  console.error(err);
}
// promise based
async function writeContent() {
  try {
    content = "I updated this!";
    await fsp.appendFile("__tests__/test2.txt",content); // adding the text to the end of a file. 
    console.log("File written succesfully.");
  } catch (err) {
    console.error(err);
  }
}
writeContent();
