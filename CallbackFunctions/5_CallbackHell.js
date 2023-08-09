// A good article for callback hell - http://callbackhell.com/
// Nester code is difficult to read, code and maintain.
class File {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
}
let filteredArr = [];
const fs = require("fs");
function SearchForNepal(callback) {
  fs.readdir("__tests__", function (error, files) {
    if (error) {
      console.error("Error reading the directory:", error);
    } else {
      let fileRemaining = files.length;
      files.forEach((filename, fileindex) => {
        fs.readFile(`__tests__/${filename}`, "utf8", (error, data) => {
          if (error) {
            console.log(`Error reading the file ${filename}`);
          } else {
            const textArr = data.split(" ");
            if (textArr.includes("Nepal")) {
              const fileObj = new File(filename, data);
              filteredArr.push(fileObj);
            }
          }
          fileRemaining--;
          if (!fileRemaining) {
            callback(filteredArr);
          }
        });
      });
    }
  });
}
function dispatchObjects(objs) {
  console.log(objs);
}
// // due to async nature of readfile, this excutes first with empty value!
// console.log(filteredArr);
SearchForNepal(dispatchObjects);
